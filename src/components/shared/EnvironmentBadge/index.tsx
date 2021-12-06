import React from 'react';

import { EnvBadgeBlock, EnvBadgeMessage } from './styled';

const EnvironmentBadge = () => {
  return (
    process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
      <EnvBadgeBlock>
        <EnvBadgeMessage type="error" description={process.env.NEXT_PUBLIC_APP_ENV} />
      </EnvBadgeBlock>
    )
  );
};

export default EnvironmentBadge;
