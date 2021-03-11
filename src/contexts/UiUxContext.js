import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import moment from 'moment';
import Router from 'next/router';
import { isEmpty } from 'lodash/fp';

import { light, supportedUIthemes } from 'src/styles/theme';
import { getBrowserWindow, getBrowserDocument } from '../utils/browserClient';
import { en, ko, supportedLocales } from '../utils/intl-i18n';

export const UiUxContext = createContext();

class UiUxContextProvider extends Component {
  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateLocale = this.updateLocale.bind(this);
    this.updateUiTheme = this.updateUiTheme.bind(this);

    this.state = {
      currentLocale: en,
      devicePixelRatio: 1,
      heightScreen: 1080,
      isMobile: false,
      previousUrl: '',
      uiTheme: light,
      widthScreen: 1920,
    };
  }

  componentDidMount() {
    const self = this;

    localforage.config({
      driver: localforage.LOCALSTORAGE,
      name: 'Boilerplate',
    });

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    Router.events.on('routeChangeStart', () => this.setState({ previousUrl: Router.asPath }));

    const { router } = Router;
    const { asPath } = router;

    if (!isEmpty(asPath) && asPath.includes('lang=')) {
      this.setState({ currentLocale: asPath.includes(`lang=${ko}`) ? ko : en });
    } else {
      localforage.getItem('locale').then(locale => {
        if (supportedLocales.includes(locale)) {
          moment.locale(locale);
          self.setState({ currentLocale: locale });
        }
      });
    }

    localforage.getItem('uiTheme').then(uiTheme => {
      if (supportedUIthemes.includes(uiTheme)) {
        self.setState({ uiTheme });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);

    Router.events.on('routeChangeStart', () => this.setState({ previousUrl: '' }));
  }

  updateDimensions() {
    const w = getBrowserWindow();
    const d = getBrowserDocument();

    if (w && d) {
      const { documentElement } = d;
      const body = d.getElementsByTagName('body')[0];
      const widthScreen = body.clientWidth || documentElement.clientWidth || w.innerWidth;
      const heightScreen = body.clientHeight || documentElement.clientHeight || w.innerHeight;

      this.setState({
        devicePixelRatio: window.devicePixelRatio,
        isMobile: widthScreen <= 480,
        widthScreen,
        heightScreen,
      });
    }
  }

  async updateLocale(locale) {
    try {
      const self = this;

      if (supportedLocales.includes(locale)) {
        moment.locale(locale);

        localforage.setItem('locale', locale).then(() => {
          self.setState({ currentLocale: locale });
        });
      }
    } catch (error) {
      console.error('UiUxContextProvider updateLocale - error: ', error);
    }
  }

  updateUiTheme(newTheme) {
    const self = this;

    if (supportedUIthemes.includes(newTheme)) {
      localforage.setItem('uiTheme', newTheme).then(() => {
        self.setState({ uiTheme: newTheme });
      });
    }
  }

  render() {
    const { children } = this.props;
    return (
      <UiUxContext.Provider
        value={{
          ...this.state,
          updateDimensions: this.updateDimensions,
          updateLocale: this.updateLocale,
          updateUiTheme: this.updateUiTheme,
        }}
      >
        {children}
      </UiUxContext.Provider>
    );
  }
}

UiUxContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

UiUxContextProvider.defaultProps = {
  children: null,
};

export default UiUxContextProvider;
