import { combineReducers } from 'redux';
import { reducer as toastr } from 'react-redux-toastr';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { HYDRATE } from 'next-redux-wrapper';

import todos from './todos';

const reducers = {
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  todos,
  toastr,
  next: (state = { tick: 'init' }, action) => {
    switch (action.type) {
      case HYDRATE:
        // Attention! This will overwrite client state! Real apps should use proper reconciliation.
        return { ...state, ...action.payload };
      case 'TICK':
        return { ...state, tick: action.payload };
      default:
        return state;
    }
  },
};

export default combineReducers(reducers);
