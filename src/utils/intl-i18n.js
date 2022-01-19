import parse from 'html-react-parser';
import localforage from 'localforage';
// eslint-disable-next-line lodash-fp/use-fp
import _ from 'lodash';
import sanitizeHtml from 'sanitize-html';

export const en = 'en';
export const ko = 'ko';
export const supportedLocales = [en, ko];

export const flattenMessages = (nestedMessages, prefix = '') => {
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;
    const formatedMsg = messages;

    if (typeof value === 'string') {
      formatedMsg[prefixedKey] = value;
    } else {
      _.assign(formatedMsg, flattenMessages(value, prefixedKey));
    }

    return formatedMsg;
  }, {});
};

export const getClientLocale = async () => {
  let locale = ko;
  if (typeof window !== 'undefined') {
    locale = await localforage.getItem('locale');

    if (supportedLocales.includes(locale)) return locale;
    return window.language ? window.language : ko;
  }
  return locale;
};

export const formatHtmlMessage = message => parse(sanitizeHtml(message));
