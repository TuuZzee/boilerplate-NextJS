export default {
  NO_DATA: 'No Data',
  DOMAIN: process.env.DOMAIN,
  API: {
    host: process.env.API_HOST,
    timeout: process.env.API_TIMEOUT,
    version: 'v1',
  },
  FIREBASE_CONFIG: {
    apiKey: process.env.FIREBASE_API_KEY,
    appId: process.env.FIREBASE_APP_ID,
    authDomain: `${process.env.FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
    // measurementId: `G-${process.env.FIREBASE_MEASUREMENT_ID}`,
    messagingSenderId: process.env.FIREBASE_SENDER_ID,
    projectId: `${process.env.FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.FIREBASE_PROJECT_ID}.appspot.com`,
  },
  DATADOG: {
    APPLICATION_ID: 'todo',
    CLIENT_TOKEN: 'todo',
  },
  PUSHER: {
    APP_KEY: 'todo',
    APP_CLUSTER: 'mt1',
  },
  COGNITO_AUTH_CONFIG: {
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_CLIENT_ID,
  },
  ERRORS_LEVELS: {
    application: 'application',
    layout: 'layout',
  },
};
