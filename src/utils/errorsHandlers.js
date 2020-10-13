// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import { Logger } from 'aws-amplify';

export const handleAmplifyErrors = (methodName, error) => {
  if (process.env.ENV !== 'production') {
    const logger = new Logger('Amplify');
    logger.error(`[handleAmplifyErrors] Error in ${methodName}`, error);
  }
  return error.code && _.isString(error.code) ? _.snakeCase(error.code) : 'request_action_failed';
};

export const loggerRequestApiErrors = error => {
  if (process.env.ENV !== 'production') {
    if (error.response) {
      console.error('Request failed: ', error.response);
    } else {
      console.debug('Error: ', JSON.stringify(error));
    }
  }
};
