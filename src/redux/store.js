import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './modules';

const middlewares = [ReduxThunk, ReduxLogger];
const createWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares));

const makeStore = initialState => {
  return createStore(reducer, initialState, createWithMiddleware);
};

const wrapper = createWrapper(makeStore, { debug: true });

export default wrapper;
