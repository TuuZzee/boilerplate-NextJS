import React from 'react';

import { EnvBadgeBlock, EnvBadgeMessage } from './styled';

function EnvironmentBadge() {
  return (
    process.env.NEXT_PUBLIC_APP_ENV !== 'production' && (
      <EnvBadgeBlock>
        <EnvBadgeMessage description={process.env.NEXT_PUBLIC_APP_ENV} type="error" />
      </EnvBadgeBlock>
    )
  );
}

export default EnvironmentBadge;
