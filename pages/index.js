import React from 'react';
import { connect } from 'react-redux';

import { IntlProvider } from 'react-intl';
import flattenMessages from 'src/utils/i18n';
import locale from 'src/locale/home';

import Layout from 'src/components/common/Layout';
import Todo from 'src/components/Todo';
import MainTitle from 'src/components/MainTitle';

const Index = () => {
  const currentLanguage = 'en';

  return (
    <Layout>
      <IntlProvider
        locale={currentLanguage}
        key={currentLanguage}
        messages={flattenMessages(locale[currentLanguage])}
      >
        <div>
          <MainTitle />
          <Todo />
        </div>
      </IntlProvider>
    </Layout>
  );
};

export default connect()(Index);
