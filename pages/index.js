import React from 'react';
import { connect } from 'react-redux';

import wordingPage from 'src/locale/landing';

import Layout from 'src/components/shared/Layout';
import Landing from 'src/components/Landing';

const Index = () => {
  return (
    <Layout wordingPage={wordingPage}>
      <Landing />
    </Layout>
  );
};

export default connect()(Index);
