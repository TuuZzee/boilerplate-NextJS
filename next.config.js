const withSourceMaps = require('@zeit/next-source-maps');

module.exports = withSourceMaps({
  crossOrigin: 'anonymous',
  target: 'experimental-serverless-trace',
});
