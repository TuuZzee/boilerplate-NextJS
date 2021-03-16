import axios from 'axios';
import axiosRetry from 'axios-retry';
// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';

import constants from './constants';
import { flattenMessages, getClientLocale, ko } from './intl-i18n';
import { loggerRequestApiErrors } from './errorsHandlers';
import localeErrorMsg from '../locale/errorMessages';

const { API } = constants;
const timeout = parseInt(API.timeout, 10);

const client = axios.create({
  baseURL: `${API.host}/`,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': typeof window !== 'undefined' ? window.locale : ko,
  },
  timeout,
});

// [Note]: retryCondition needs to be overide until patch for package applied
// -> https://github.com/softonic/axios-retry/issues/59
// -> https://github.com/softonic/axios-retry/pull/82
axiosRetry(client, {
  retries: 3,
  retryDelay: (retryCount, error) => {
    if (process.env.APP_ENV !== 'production') {
      console.debug('retryDelay:', new Date());
      console.debug('Error:', error);
    }

    return retryCount * process.env.API_TIMEOUT_BULLDAX;
  },
});

const requestBulldaxAPI = async options => {
  const onSuccess = response => {
    if (process.env.APP_ENV !== 'production')
      console.debug('Request API Successful response: ', response);

    return response.data;
  };

  const onError = async error => {
    loggerRequestApiErrors(error);

    const locale = await getClientLocale();
    const errorMsgList = flattenMessages(localeErrorMsg[locale]);

    let errorMsg = errorMsgList['errorMsg.default'];
    let data = null;

    try {
      if (error.response) {
        const errorData = error.response.data;
        data = errorData;

        if (error.config.method !== 'get' && errorData.code) {
          if (errorMsgList[`errorMsg.${errorData.code}`]) {
            errorMsg = errorMsgList[`errorMsg.${errorData.code}`];
          }
        }
      }
      // Custom Error return
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        status: error.response ? error.response.status : 400,
        data,
        errorMsg,
      });
    } catch (e) {
      return Promise.reject(new Error(errorMsg));
    }
  };

  try {
    const response = await client(_.merge(options));
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default requestBulldaxAPI;
