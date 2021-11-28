import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

import constants from './constants';

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(constants.FIREBASE_CONFIG)
  : firebase.app();

export const firestoreDb = firebaseApp.firestore();

export const firebaseStorage = firebaseApp.storage();

export default firebaseApp;
