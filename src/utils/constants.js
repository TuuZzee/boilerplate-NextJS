export default {
  NO_DATA: 'No Data',
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  API: {
    host: process.env.NEXT_PUBLIC_API_HOST,
    timeout: process.env.NEXT_PUBLIC_API_TIMEOUT,
    version: 'v1',
  },
  ERRORS_LEVELS: {
    application: 'application',
    layout: 'layout',
  },
};
