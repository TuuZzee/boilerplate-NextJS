import { createWrapper } from 'next-redux-wrapper';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import reducer from './modules';

// Note: disable dev-tools and logs in Production mode
const middlewares =
  process.env.NEXT_PUBLIC_APP_ENV === 'production' ? [ReduxThunk] : [ReduxThunk, ReduxLogger];
const createWithMiddleware =
  process.env.NEXT_PUBLIC_APP_ENV === 'production'
    ? applyMiddleware(...middlewares)
    : composeWithDevTools(applyMiddleware(...middlewares));

export const makeStore = initialState => {
  return createStore(reducer, initialState, createWithMiddleware);
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
