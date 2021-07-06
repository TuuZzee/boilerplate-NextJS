import React, { createContext, useEffect, useState } from 'react';
import localforage from 'localforage';
import moment from 'moment';
import PropTypes from 'prop-types';
import Router from 'next/router';
import { isEmpty } from 'lodash/fp';

import { getNavigator } from 'src/utils/browserClient';
import { en, ko, supportedLocales } from 'src/utils/intl-i18n';

export const LocaleContext = createContext();

const localeStorageId = 'locale';

const LocaleContextProvider = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState(en);

  const updateLocale = async locale => {
    try {
      if (supportedLocales.includes(locale)) {
        setCurrentLocale(locale);

        // Persist locale setting to API/Back-end
      }
    } catch (error) {
      console.error('LocaleContextProvider updateLocale - error: ', error);
    }
  };

  useEffect(() => {
    const setDefaultLocale = async () => {
      let locale = en;
      const { router } = Router;
      const { asPath } = router;

      try {
        if (!isEmpty(asPath) && asPath.includes('lang=')) {
          locale = asPath.includes(`lang=${ko}`) ? ko : en;
        } else {
          const navigator = getNavigator();
          const navLanguage = navigator.language || navigator.userLanguage;
          const navLocale = navLanguage.slice(0, navLanguage.indexOf('-'));

          const storageLocale = await localforage.getItem(localeStorageId);

          if (storageLocale) {
            locale = storageLocale;
          } else if (navLocale) {
            locale = navLocale;
          }
        }
      } catch (error) {
        console.error('LocaleContextProvider - setDefaultLocale error: ', error);
      }

      if (locale !== currentLocale && supportedLocales.includes(locale)) {
        setCurrentLocale(locale);
      }
    };

    setDefaultLocale();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    moment.locale(currentLocale);
    localforage.setItem(localeStorageId, currentLocale);
  }, [currentLocale]);

  return (
    <LocaleContext.Provider value={{ currentLocale, updateLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

LocaleContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

LocaleContextProvider.defaultProps = {
  children: null,
};

export default LocaleContextProvider;
