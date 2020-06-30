import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

import todos from './todos';

const reducers = {
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  todos,
  toastr,
};

export default combineReducers(reducers);
