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

export const getNavigator = () => {
  if (typeof navigator !== 'undefined') {
    return navigator;
  }
  return '';
};

export const getBrowserUserAgent = () => {
  if (typeof navigator !== 'undefined') {
    return navigator.userAgent;
  }
  return '';
};
