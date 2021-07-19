import axios from 'axios';
import axiosRetry from 'axios-retry';
import localforage from 'localforage';
import { cloneDeep } from 'lodash/fp';
import { toastr } from 'react-redux-toastr';

import localeErrorMsg from 'src/locale/errorMessages';
import { localeStorageId } from 'src/contexts/LocaleContext';

import constants from './constants';
import Emitter from './emitter';
import { flattenMessages } from './intl-i18n';

export const authenticationFailed = 'authentication_fail';
export const clientTokenStorageId = 'clientTokens';

const isNotProduction = process.env.NEXT_PUBLIC_APP_ENV !== 'production';

const { API } = constants;
const timeout = parseInt(constants.API.timeout, 10);

const setClientTokenData = async tokens => {
  await localforage.setItem(clientTokenStorageId, JSON.stringify({ ...tokens }));
};

const getClientTokens = async () => {
  const localStorageTokens = await localforage.getItem(clientTokenStorageId);

  return JSON.parse(localStorageTokens);
};

const clearSession = async () => {
  await localforage.removeItem(clientTokenStorageId);
};

const requestAPI = axios.create({
  baseURL: `${API.host}/`,
  headers: { 'Content-Type': 'application/json' },
  timeout,
});

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

// Request interceptor
requestAPI.interceptors.request.use(
  async config => {
    try {
      if (isNotProduction) {
        console.debug('requestAPI - interceptors.req sent config: ', config);
      }

      const configReq = cloneDeep(config);
      configReq.headers['Accept-Language'] = await localforage.getItem(localeStorageId);

      // Authenticated request add the accessToken in the header
      if (configReq.useAuth) {
        const { accessToken } = await getClientTokens();
        configReq.headers.Authorization = `Bearer ${accessToken}`;
      }
      return configReq;
    } catch (error) {
      console.error(`requestAPI - interceptors.req config: ${config} - error: ${error}`);
      return config;
    }
  },
  error => {
    console.error('requestAPI - interceptors.req error: ', error);

    return Promise.reject(error);
  },
);

// Response interceptor
requestAPI.interceptors.response.use(
  async res => {
    try {
      if (isNotProduction) {
        console.debug('requestAPI - interceptors.res sent res: ', res);
      }

      const { config, data } = res;

      // Example of implementation for handling access tokens in various processes:
      // Sign-In / Refresh credentials
      if (['/sign-in', '/refresh'].includes(config.url)) {
        const { accessToken } = data.data;

        await setClientTokenData({ accessToken });
      }
      // Sign-Out
      if (config.url === '/sign-out') {
        clearSession();
      }

      // Toastr message handing
      if (config && !!config.toastrSuccessContent) {
        toastr.success(config.toastrSuccessContent);
      } else if (config && !!config.toastrInfoContent) {
        toastr.success(config.toastrInfoContent);
      }
    } catch (error) {
      console.error(`requestAPI - interceptors.res res: ${res} - error: ${error}`);
    }
    return res.data;
  },
  async error => {
    if (isNotProduction) {
      console.debug('requestAPI - interceptors.res error: ', error && error.response);
    }

    const { response } = error;
    const { config, data } = response;

    const locale = await localforage.getItem(localeStorageId);
    const errorMsgList = flattenMessages(localeErrorMsg[locale]);

    let errorMsg = errorMsgList['errorMsg.default'];
    try {
      if (response) {
        const { code } = data;

        if (code && code === authenticationFailed) {
          Emitter.emit(authenticationFailed);
          clearSession();
        } else if (code && errorMsgList[`errorMsg.${code}`]) {
          errorMsg = errorMsgList[`errorMsg.${code}`];
        }
      }

      // Toastr message handing
      if (config && config.useToastrError && errorMsg) {
        toastr.error(errorMsg);
      }
    } catch (e) {
      console.error(`requestAPI - interceptors.res error: ${error} - e: ${e}`);
    }
    // [Note]: Reject with custom object to handle the error in higher catch
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject({ status: response ? response.status : 400, data, errorMsg });
  },
);

export default requestAPI;
