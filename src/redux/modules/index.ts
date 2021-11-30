import { AnyAction, combineReducers } from 'redux';
import { reducer as toastrReducer, ToastrState } from 'react-redux-toastr';
import { FirebaseReducer, firebaseReducer, FirestoreReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { HYDRATE } from 'next-redux-wrapper';

import todos, { TodoStateType } from './todos';

type State = {
  tick: string;
};

export type RootState = {
  firestore: FirestoreReducer.Reducer;
  firebase: FirebaseReducer.Reducer;
  next: State;
  toastr: ToastrState;
  todos: TodoStateType;
};

const reducers = combineReducers<RootState>({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  toastr: toastrReducer,
  todos,
  next: (state: State = { tick: 'init' }, action: AnyAction) => {
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
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
