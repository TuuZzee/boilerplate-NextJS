import React from 'react';

import { connect } from 'react-redux';

import Landing from 'src/components/Landing';
import Layout from 'src/components/shared/Layout';
import wordingPage from 'src/locale/landing';

function Index() {
  return (
    <Layout wordingPage={wordingPage}>
      <Landing />
    </Layout>
  );
}

export default connect()(Index);
