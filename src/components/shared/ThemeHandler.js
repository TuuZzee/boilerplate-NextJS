import React, { useContext, useEffect, useState } from 'react';

import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { UiUxContext } from 'src/contexts/UiUxContext';

import darkTheme from 'src/styles/darkTheme';
import lightTheme from 'src/styles/lightTheme';
import { light, supportedUIthemes } from 'src/styles/theme';

function ThemeHandler({ children }) {
  const { uiTheme } = useContext(UiUxContext);

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (supportedUIthemes.includes(uiTheme)) {
      setTheme(uiTheme);
    }
  }, [uiTheme]);

  return <ThemeProvider theme={theme === light ? lightTheme : darkTheme}>{children}</ThemeProvider>;
}

ThemeHandler.propTypes = {
  children: PropTypes.oneOfType([PropTypes.shape([]), PropTypes.shape({}), PropTypes.node]),
};

ThemeHandler.defaultProps = {
  children: null,
};

export default ThemeHandler;
