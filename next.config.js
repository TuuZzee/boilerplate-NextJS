/* eslint-disable no-param-reassign */

require('dotenv').config();

const withImages = require('next-images');

module.exports = withImages({
  crossOrigin: 'anonymous',
  target: 'experimental-serverless-trace',
  env: {
    ENV: process.env.ENV,
    // Firebase/Firestore
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DB_URL: process.env.FIREBASE_DB_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BKT: process.env.FIREBASE_STORAGE_BKT,
    FIREBASE_MESSENGING_SENDER_ID: process.env.FIREBASE_MESSENGING_SENDER_ID,
    // AWS
    COGNITO_REGION: process.env.COGNITO_REGION,
    COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID,
    COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID,
  },
});
