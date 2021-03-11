import React from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';

import Todo from './Todo';

import { LandingTitle, LandingWrapper } from './styled';

const Landing = () => {
  const intl = useIntl();

  return (
    <LandingWrapper>
      <LandingTitle style={{ textAlign: 'center' }}>{intl.messages['landing.title']}</LandingTitle>
      <Todo />
    </LandingWrapper>
  );
};

export default connect()(Landing);
