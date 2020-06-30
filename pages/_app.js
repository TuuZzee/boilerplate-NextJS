/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import ReduxToastr from 'react-redux-toastr';
import { Provider } from 'react-redux';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

import firebaseApp from 'src/utils/firebaseApp';
import initStore from 'src/redux/store';

import 'src/styles/index.scss';

const rrfConfig = {
  userProfile: null,
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

/* debug to log how the store is being used */
export default withRedux(initStore)(
  class MyApp extends App {
    render() {
      console.debug('firebaseApp: ', firebaseApp);
      const { Component, pageProps, store } = this.props;

      const rrfProps = {
        firebase: firebaseApp,
        config: rrfConfig,
        dispatch: store.dispatch,
        createFirestoreInstance,
      };

      return (
        <Provider store={store}>
          <ReduxToastr
            preventDuplicates
            position="top-right"
            transitionIn="bounceInDown"
            transitionOut="bounceOutUp"
            closeOnToastrClick
          />
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Component {...pageProps} />
          </ReactReduxFirebaseProvider>
        </Provider>
      );
    }
  },
);
