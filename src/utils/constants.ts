export default {
  NO_DATA: 'No Data',
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  API: {
    host: process.env.NEXT_PUBLIC_API_HOST,
    timeout: process.env.NEXT_PUBLIC_API_TIMEOUT,
    version: 'v1',
  },
  FIREBASE_CONFIG: {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    authDomain: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseapp.com`,
    databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
    projectId: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,
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
    region: process.env.NEXT_PUBLIC_COGNITO_REGION,
    userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID,
  },
};

export enum ErrorLevels {
  application = 'application',
  layout = 'layout',
}
