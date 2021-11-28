export const getBrowserWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
  return null;
};

export const getBrowserDocument = () => {
  if (typeof document !== 'undefined') {
    return document;
  }
  return null;
};
interface CustomNavigatorTypes extends Navigator {
  userLanguage?: string;
}

export const getNavigator = () => {
  if (typeof navigator !== 'undefined') {
    const customNavigator: CustomNavigatorTypes = navigator;
    return customNavigator;
  }
  return '';
};

export const getBrowserUserAgent = () => {
  if (typeof navigator !== 'undefined') {
    return navigator.userAgent;
  }
  return '';
};
