import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import { Alert } from 'reactstrap';
import { IntlProvider } from 'react-intl';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { isEmpty, mergeAll } from 'lodash/fp';

import constants from 'src/utils/constants';
import metaProps from 'src/utils/metaProps';
import wordingCommon from 'src/locale/common';
import wordingErrors from 'src/locale/errorMessages';
import { LocaleContext } from 'src/contexts/LocaleContext';
import { en, flattenMessages } from 'src/utils/intl-i18n';

import ErrorBoundary from 'src/components/shared/ErrorBoundary';

import FirebaseCollectionsLoaders from 'src/components/shared/dataLoaders/firebase/Collections';
import FirestoreCollectionsLoaders from 'src/components/shared/dataLoaders/firestore/Collections';

import Nav from './Nav';

const EnvironmentBadge = () => {
  return (
    <>
      {process.env.NEXT_PUBLIC_APP_ENV !== 'production' ? (
        <>
          <Alert color="danger">{process.env.NEXT_PUBLIC_APP_ENV}</Alert>
          <style>{`
            .alert.alert-danger {
              position: fixed;
              left: 10px;
              top: 90%;
              padding: 5px 10px;
              font-size: 12px;
            }
          `}</style>
        </>
      ) : null}
    </>
  );
};

const Layout = ({ children, query, wordingPage }) => {
  const router = useRouter();
  const { currentLocale } = useContext(LocaleContext);

  // note: locale setting is async in the context
  const metaLocale = !isEmpty(query) && !isEmpty(query.lang) ? query.lang : currentLocale;

  const intlMessages = flattenMessages(
    mergeAll([wordingCommon, wordingPage, wordingErrors])[currentLocale],
  );

  return (
    <div id="main-layout">
      {/* Scripts */}
      <Script
        src="https://kit.fontawesome.com/4133372eed.js"
        crossOrigin="anonymous"
        strategy="beforeInteractive"
      />
      {/* Status Page and analitics */}
      {process.env.NEXT_PUBLIC_APP_ENV === 'production' ? (
        <>
          {/* <Script
            src="https://www.datadoghq-browser-agent.com/datadog-rum.js"
            type="text/javascript"
            strategy="beforeInteractive"
          />
          <Script
            src="https://{code}.statuspage.io/embed/script.js"
            strategy="beforeInteractive"
          /> */}
        </>
      ) : null}

      {/* SEO */}
      <DefaultSeo
        title={metaProps.title}
        keywords={metaProps.keywords[metaLocale]}
        description={metaProps.description[metaLocale]}
        openGraph={{
          type: 'website',
          url: currentLocale === en ? `${constants.DOMAIN}?lang=${en}` : constants.DOMAIN,
          site_name: 'Boilerplate',
          description: metaProps.description[metaLocale],
          images: [{ url: metaProps.og.global.imageUrl[metaLocale], width: 650, height: 340 }],
        }}
      />

      <FirebaseCollectionsLoaders route={router ? router.route : null} />
      <FirestoreCollectionsLoaders route={router ? router.route : null} />
      <IntlProvider
        defaultLocale={currentLocale}
        key={currentLocale}
        locale={currentLocale}
        messages={intlMessages}
      >
        <ErrorBoundary errorLevel={constants.ERRORS_LEVELS.layout}>
          <header>
            <Nav />
          </header>
        </ErrorBoundary>

        <main id="page-wrap" aria-hidden="true">
          {children}
        </main>
      </IntlProvider>
      <EnvironmentBadge />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  query: PropTypes.shape({ lang: PropTypes.string }),
  wordingPage: PropTypes.shape({}).isRequired,
};

Layout.defaultProps = {
  children: null,
  query: { lang: '' },
};

export default Layout;
