/* eslint-disable security/detect-object-injection */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

import Layout from 'src/components/shared/Layout';
import Todo from 'src/components/Todo';

const Index = () => {
  return (
    <Layout>
      <h3 style={{ textAlign: 'center' }}>Landing Page</h3>
      <Todo />
    </Layout>
  );
};

export default connect()(Index);
