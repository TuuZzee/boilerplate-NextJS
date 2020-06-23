/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';

import firebaseApp from 'utils/firebaseApp';
import initStore from '../utils/store';

import '../css/index.scss';

/* debug to log how the store is being used */
export default withRedux(initStore)(
  class MyApp extends App {
    render() {
      console.debug('firebaseApp: ', firebaseApp);
      const { Component, pageProps, store } = this.props;

      return (
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      );
    }
  },
);
