/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import ReduxToastr from 'react-redux-toastr';
import PropTypes from 'prop-types';
import { Provider, useStore } from 'react-redux';
// To enable Firebase/Firestore config needs add a valid Firebase app keys to .env.local
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { ReactQueryDevtools } from 'react-query-devtools';

import { ErrorLevels } from 'src/utils/constants';
import ErrorBoundary from 'src/components/shared/ErrorBoundary';
import firebaseApp from 'src/utils/firebaseApp';
import ThemeHandler from 'src/components/shared/ThemeHandler';
import LocaleContextProvider from 'src/contexts/LocaleContext';
import UiUxContextProvider from 'src/contexts/UiUxContext';
import RoutingContextProvider from 'src/contexts/RoutingContext';
import wrapper from 'src/redux/store';
import { GlobalStyles } from 'src/styles/styledComponents/globalStyled';

// [Note]: extra configuration might be needed if
//         some components aren't working properly for React Suite
// -> https://rsuitejs.com/guide/use-next-app/
import 'rsuite/dist/styles/rsuite-default.css';
import 'src/styles/index.scss';

const rrfConfig = {
  userProfile: null,
  // useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

// Top Progress bar
NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
  const store = useStore();

  const rrfProps = {
    firebase: firebaseApp,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
  };

  return (
    <ErrorBoundary errorLevel={ErrorLevels.application}>
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
        <ReactReduxFirebaseProvider {...rrfProps}>
          <RoutingContextProvider>
            <UiUxContextProvider>
              <ThemeHandler>
                <LocaleContextProvider>
                  <ReduxToastr
                    preventDuplicates
                    position="top-right"
                    transitionIn="bounceInDown"
                    transitionOut="bounceOutUp"
                    closeOnToastrClick
                    progressBar
                  />
                  <GlobalStyles />
                  <Component {...pageProps} />
                </LocaleContextProvider>
              </ThemeHandler>
            </UiUxContextProvider>
          </RoutingContextProvider>
        </ReactReduxFirebaseProvider>
        {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
        )}
      </Provider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default wrapper.withRedux(App);
