/* eslint-disable no-param-reassign */

require('dotenv').config();

module.exports = {
  crossOrigin: 'anonymous',
  target: 'experimental-serverless-trace',
  env: {
    ENV: process.env.ENV,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
    FIREBASE_DB_URL: process.env.FIREBASE_DB_URL,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BKT: process.env.FIREBASE_STORAGE_BKT,
    FIREBASE_MESSENGING_SENDER_ID: process.env.FIREBASE_MESSENGING_SENDER_ID,
  },
};
