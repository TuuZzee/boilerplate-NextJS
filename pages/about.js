import React from 'react';

import Layout from 'src/components/shared/Layout';
import wordingPage from 'src/locale/about';

function About() {
  return (
    <Layout wordingPage={wordingPage}>
      <h3 style={{ textAlign: 'center' }}>About Page</h3>
    </Layout>
  );
}

export default About;
