// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const withSourceMaps = require('@zeit/next-source-maps');
const withImages = require('next-images');

module.exports = withSourceMaps(
  withImages({
    crossOrigin: 'anonymous',
    target: 'experimental-serverless-trace',
    env: {
      ENV: process.env.ENV,
      APP_ENV: process.env.APP_ENV,
      NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,
      // urls
      DOMAIN: process.env.DOMAIN,
      API_HOST: process.env.API_HOST,
      API_TIMEOUT: process.env.API_TIMEOUT,
      // AWS
      COGNITO_REGION: process.env.COGNITO_REGION,
      COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
      COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
      // Firebase
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_MESSENGING_SENDER_ID: process.env.FIREBASE_MESSENGING_SENDER_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID,
    },
    images: {
      loader: 'imgix',
      // domains: [process.env.DOMAIN],
      // path: [process.env.DOMAIN],
    },

    // eslint-disable-next-line no-unused-vars
    webpack(config, options) {
      return config;
    },
  }),
);
