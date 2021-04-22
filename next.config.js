const withSourceMaps = require('@zeit/next-source-maps');
const withImages = require('next-images');

module.exports = withSourceMaps(
  withImages({
    crossOrigin: 'anonymous',
    target: 'experimental-serverless-trace',
    images: {
      loader: 'imgix',
      // domains: [process.env.NEXT_PUBLIC_DOMAIN],
      // path: [process.env.NEXT_PUBLIC_DOMAIN],
    },

    // eslint-disable-next-line no-unused-vars
    webpack(config, options) {
      return config;
    },
  }),
);
