import React from 'react';

import { useIntl } from 'react-intl';
import { connect } from 'react-redux';

import { LandingTitle, LandingWrapper } from './styled';
import Todo from './Todo';

function Landing() {
  const intl = useIntl();

  return (
    <LandingWrapper>
      <LandingTitle>{intl.messages['landing.title']}</LandingTitle>
      <Todo />
    </LandingWrapper>
  );
}

export default connect()(Landing);
