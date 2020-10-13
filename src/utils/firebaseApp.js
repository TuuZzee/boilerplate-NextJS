import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

import constants from './constants';

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(constants.FIREBASE_CONFIG)
  : firebase.app();

firebaseApp.firestore();

export default firebaseApp;
