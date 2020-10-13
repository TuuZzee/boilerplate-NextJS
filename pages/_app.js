/* eslint-disable react/jsx-props-no-spreading */

import React, { useEffect } from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import ReduxToastr from 'react-redux-toastr';
import PropTypes from 'prop-types';
import { Provider, useStore } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query-devtools';
import { datadogRum } from '@datadog/browser-rum';

import constants from 'src/utils/constants';
import ErrorBoundary from 'src/components/shared/ErrorBoundary';
import firebaseApp from 'src/utils/firebaseApp';
import UiUxContextProvider from 'src/contexts/UiUxContext';
import wrapper from 'src/redux/store';

import 'react-dates/initialize';
import 'src/styles/index.scss';

const rrfConfig = {
  userProfile: null,
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const theme = {};

// Top Progress bar
NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.ENV === 'production' || process.env.ENV === 'stewie') {
      datadogRum.init({
        applicationId: constants.DATADOG.APPLICATION_ID,
        clientToken: constants.DATADOG.CLIENT_TOKEN,
        site: 'datadoghq.com',
        resourceSampleRate: 100,
        sampleRate: 100,
        trackInteractions: true,
        [`silentMultipleInit?`]: false,
      });
    }
  }, []);

  const store = useStore();

  const rrfProps = {
    firebase: firebaseApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  return (
    <ErrorBoundary errorLevel={constants.ERRORS_LEVELS.application}>
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, maximum-scale=1, user-scalable=no, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Provider store={store}>
        <ReduxToastr
          preventDuplicates
          position="top-right"
          transitionIn="bounceInDown"
          transitionOut="bounceOutUp"
          closeOnToastrClick
          progressBar
        />
        <ReactReduxFirebaseProvider {...rrfProps}>
          <UiUxContextProvider>
            <ThemeProvider theme={theme}>
              <Component {...pageProps} />
            </ThemeProvider>
          </UiUxContextProvider>
        </ReactReduxFirebaseProvider>
        <ReactQueryDevtools position="bottom-left" />
      </Provider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default wrapper.withRedux(App);
