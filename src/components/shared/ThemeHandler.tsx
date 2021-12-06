import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { UiUxContext } from 'src/contexts/UiUxContext';

import darkTheme from 'src/styles/darkTheme';
import lightTheme from 'src/styles/lightTheme';
import { light, supportedUIthemes } from 'src/styles/theme';

interface ThemeType {
  children?: JSX.Element;
}

const ThemeHandler = ({ children }: ThemeType) => {
  const { uiTheme } = useContext(UiUxContext);

  const [theme, setTheme] = useState(light);

  useEffect(() => {
    if (supportedUIthemes.includes(uiTheme)) {
      setTheme(uiTheme);
    }
  }, [uiTheme]);

  return <ThemeProvider theme={theme === light ? lightTheme : darkTheme}>{children}</ThemeProvider>;
};

export default ThemeHandler;
