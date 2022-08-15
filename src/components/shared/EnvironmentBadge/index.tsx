import React from 'react';

import { EnvBadgeBlock, EnvBadgeMessage } from './styled';

const EnvironmentBadge = () => {
  return (
    process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
      <EnvBadgeBlock>
        <EnvBadgeMessage>{process.env.NEXT_PUBLIC_APP_ENV}</EnvBadgeMessage>
      </EnvBadgeBlock>
    )
  );
};

export default EnvironmentBadge;
