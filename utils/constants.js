export default {
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
  COGNITO_AUTH_CONFIG: {
    region: process.env.COGNITO_REGION,
    userPoolId: process.env.COGNITO_USER_POOL_ID,
    userPoolWebClientId: process.env.COGNITO_CLIENT_ID,
    authenticationFlowType: 'CUSTOM_AUTH',
  },
  IMP_MERCHANT_ID: 'TODO',
  GA_TRACKING_ID: 'TODO',
};
