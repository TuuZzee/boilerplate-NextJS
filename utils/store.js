import { createStore, compose, applyMiddleware } from 'redux';
import ReduxLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from '../reducers';

const enhancers = compose(
  typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const middlewares = [ReduxThunk, ReduxLogger];

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default initialState =>
  createStoreWithMiddleware(rootReducer, initialState, enhancers);
