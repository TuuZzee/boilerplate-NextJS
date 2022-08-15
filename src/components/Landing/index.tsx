import React from 'react';
import Todo from './Todo';

import { LandingTitle, LandingWrapper } from './styled';
import landing from 'src/locale/landing';

const Landing = () => {
  return (
    <LandingWrapper>
      <LandingTitle>{landing.landing.title}</LandingTitle>
      <Todo />
    </LandingWrapper>
  );
};

export default Landing;
