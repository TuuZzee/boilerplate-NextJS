import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage';

import constants from './constants';

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(constants.FIREBASE_CONFIG)
  : firebase.app();

export const firestoreDb = firebaseApp.firestore();

export const firebaseStorage = firebaseApp.storage();

export default firebaseApp;
