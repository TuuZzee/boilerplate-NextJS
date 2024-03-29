import React from 'react';

import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import ErrorBoundary from 'src/components/shared/ErrorBoundary';
import ThemeHandler from 'src/components/shared/ThemeHandler';
import LocaleContextProvider from 'src/contexts/LocaleContext';
import RoutingContextProvider from 'src/contexts/RoutingContext';
import UiUxContextProvider from 'src/contexts/UiUxContext';
import wrapper from 'src/redux/store';
import { GlobalStyles } from 'src/styles/styledComponents/globalStyled';
import constants from 'src/utils/constants';

import 'rsuite/dist/rsuite.min.css';
import 'src/styles/index.scss';

const queryClient = new QueryClient();

// Top Progress bar
NProgress.configure();
Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = function ({ Component, pageProps, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <ErrorBoundary errorLevel={constants.ERRORS_LEVELS.application}>
      <Head>
        {/* Meta */}
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta
          content="width=device-width, maximum-scale=1, user-scalable=no, initial-scale=1, shrink-to-fit=no"
          name="viewport"
        />
      </Head>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RoutingContextProvider>
            <UiUxContextProvider>
              <ThemeHandler>
                <LocaleContextProvider>
                  <ReduxToastr
                    closeOnToastrClick
                    position="top-right"
                    preventDuplicates
                    progressBar
                    transitionIn="bounceInDown"
                    transitionOut="bounceOutUp"
                  />
                  <GlobalStyles />
                  <Component {...pageProps} {...props.pageProps} />
                </LocaleContextProvider>
              </ThemeHandler>
            </UiUxContextProvider>
          </RoutingContextProvider>
          {process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
            <ReactQueryDevtools initialIsOpen={false} position="bottom-left" />
          )}
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({})]).isRequired,
  pageProps: PropTypes.shape({}).isRequired,
};

export default App;
