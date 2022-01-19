import React, { createContext, useMemo, useEffect, useState } from 'react';

import Router from 'next/router';
import PropTypes from 'prop-types';

export const RoutingContext = createContext();

const routeChangeStartEventId = 'routeChangeStart';

const RoutingContextProvider = function ({ children }) {
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    Router.events.on(routeChangeStartEventId, () => setPreviousUrl(Router.asPath));
    return () => {
      Router.events.on(routeChangeStartEventId, () => setPreviousUrl(''));
    };
  }, []);

  const value = useMemo(() => ({ previousUrl }), [previousUrl]);

  return <RoutingContext.Provider value={value}>{children}</RoutingContext.Provider>;
};

RoutingContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

RoutingContextProvider.defaultProps = { children: null };

export default RoutingContextProvider;
