import React, { useContext } from 'react';

import { mergeAll } from 'lodash/fp';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';
import { Container, Header, Content, Footer } from 'rsuite';

import { LocaleContext } from 'src/contexts/LocaleContext';
import wordingCommon from 'src/locale/common';
import wordingErrors from 'src/locale/errorMessages';
import constants from 'src/utils/constants';
import { flattenMessages } from 'src/utils/intl-i18n';

import EnvironmentBadge from './EnvironmentBadge';
import ErrorBoundary from './ErrorBoundary';
import Nav from './Nav';

function Layout({ children, wordingPage }) {
  const { currentLocale } = useContext(LocaleContext);

  const intlMessages = flattenMessages(
    mergeAll([wordingCommon, wordingPage, wordingErrors])[currentLocale],
  );

  return (
    <div id="main-layout">
      <IntlProvider
        defaultLocale={currentLocale}
        key={currentLocale}
        locale={currentLocale}
        messages={intlMessages}
      >
        <ErrorBoundary errorLevel={constants.ERRORS_LEVELS.layout}>
          <Container>
            <Header>
              <Nav />
            </Header>
            <Content>{children}</Content>
            <Footer />
          </Container>
        </ErrorBoundary>
      </IntlProvider>
      <EnvironmentBadge />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  wordingPage: PropTypes.shape({}).isRequired,
};

Layout.defaultProps = { children: null };

export default Layout;
