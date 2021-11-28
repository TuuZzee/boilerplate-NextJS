import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

type State = {
  previousUrl: string;
};
export const RoutingContext = createContext<State | null>(null);

const routeChangeStartEventId = 'routeChangeStart';

const RoutingContextProvider = ({ children }) => {
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    Router.events.on(routeChangeStartEventId, () => setPreviousUrl(Router.asPath));
    return () => {
      Router.events.on(routeChangeStartEventId, () => setPreviousUrl(''));
    };
  }, []);

  return <RoutingContext.Provider value={{ previousUrl }}>{children}</RoutingContext.Provider>;
};

RoutingContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

RoutingContextProvider.defaultProps = {
  children: null,
};

export default RoutingContextProvider;
