import React from 'react';

import wordingPage from 'src/locale/about';

import Layout from 'src/components/shared/Layout';

const About = () => {
  return (
    <Layout wordingPage={wordingPage}>
      <h3 style={{ textAlign: 'center' }}>About Page</h3>
    </Layout>
  );
};

export default About;
