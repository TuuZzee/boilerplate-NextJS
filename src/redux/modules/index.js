import { HYDRATE } from 'next-redux-wrapper';
import { reducer as toastr } from 'react-redux-toastr';
import { combineReducers } from 'redux';
// import { firebaseReducer } from 'react-redux-firebase';
// import { firestoreReducer } from 'redux-firestore';

import todos from './todos';

const reducers = {
  // firebase: firebaseReducer,
  // firestore: firestoreReducer,
  toastr,
  todos,
  next: (state = { tick: 'init' }, action = {}) => {
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