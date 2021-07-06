const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  crossOrigin: 'anonymous',
  target: 'experimental-serverless-trace',

  // eslint-disable-next-line no-unused-vars
  webpack(config, options) {
    return config;
  },
});
