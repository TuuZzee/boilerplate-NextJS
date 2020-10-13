import React, { createContext, Component } from 'react';
import PropTypes from 'prop-types';
import localforage from 'localforage';
import moment from 'moment';
import Router from 'next/router';

import { getBrowserWindow, getBrowserDocument } from '../utils/browserClient';
import { supportedLocales } from '../utils/intl-i18n';

export const UiUxContext = createContext();

class UiUxContextProvider extends Component {
  constructor(props) {
    super(props);

    this.updateDimensions = this.updateDimensions.bind(this);
    this.updateLocale = this.updateLocale.bind(this);

    this.state = {
      currentLocale: 'ko',
      devicePixelRatio: 1,
      heightScreen: 1080,
      isMobile: false,
      previousUrl: '',
      widthScreen: 1920,
    };
  }

  componentDidMount() {
    localforage.config({
      driver: localforage.LOCALSTORAGE,
      name: 'Bulldax',
    });

    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions);

    Router.events.on('routeChangeStart', () => this.setState({ previousUrl: Router.asPath }));

    const self = this;
    localforage.getItem('locale').then(locale => {
      if (supportedLocales.includes(locale)) {
        moment.locale(locale);
        self.setState({ currentLocale: locale });
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

  updateLocale(locale) {
    const self = this;
    if (supportedLocales.includes(locale)) {
      moment.locale(locale);

      localforage.setItem('locale', locale).then(() => {
        self.setState({ currentLocale: locale });
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
