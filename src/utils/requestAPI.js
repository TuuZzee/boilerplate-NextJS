import axios from 'axios';
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

const requestBulldaxAPI = async options => {
  const onSuccess = response => {
    if (process.env.NEXT_PUBLIC_APP_ENV !== 'production')
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
