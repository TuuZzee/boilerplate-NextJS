import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';

import { dark, supportedUIthemes } from 'src/styles/theme';
import { getBrowserWindow, getBrowserDocument } from 'src/utils/browserClient';

export const UiUxContext = createContext();

const uiThemeStorageId = 'uiTheme';
const resizeEventId = 'resize';

const UiUxContextProvider = ({ children }) => {
  const [deviceProps, setDeviceProps] = useState({
    devicePixelRatio: 1,
    heightScreen: 1080,
    isMobile: false,
    widthScreen: 1920,
  });
  const [uiTheme, setUiTheme] = useState(dark);

  const updateDimensions = () => {
    const w = getBrowserWindow();
    const d = getBrowserDocument();

    if (w && d) {
      const { documentElement } = d;
      const body = d.getElementsByTagName('body')[0];
      const widthScreen = body.clientWidth || documentElement.clientWidth || w.innerWidth;
      const heightScreen = body.clientHeight || documentElement.clientHeight || w.innerHeight;

      setDeviceProps({
        devicePixelRatio: window.devicePixelRatio,
        isMobile: widthScreen <= 480,
        widthScreen,
        heightScreen,
      });
    }
  };

  const updateUiTheme = newTheme => {
    if (supportedUIthemes.includes(newTheme)) {
      setUiTheme(newTheme);
    }
  };

  useEffect(() => {
    const setDefaultTheme = async () => {
      const storageTheme = await localforage.getItem(uiThemeStorageId);

      if (storageTheme !== uiTheme && supportedUIthemes.includes(storageTheme)) {
        setUiTheme(storageTheme);
      }
    };

    setDefaultTheme();
    updateDimensions();
    window.addEventListener(resizeEventId, updateDimensions);

    return () => {
      window.removeEventListener(resizeEventId, updateDimensions);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localforage.setItem(uiThemeStorageId, uiTheme);
  }, [uiTheme]);

  return (
    <UiUxContext.Provider
      value={{
        ...deviceProps,
        uiTheme,
        updateDimensions,
        updateUiTheme,
      }}
    >
      {children}
    </UiUxContext.Provider>
  );
};

UiUxContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

UiUxContextProvider.defaultProps = {
  children: null,
};

export default UiUxContextProvider;
