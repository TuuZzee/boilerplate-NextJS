const env = process.env.NEXT_PUBLIC_APP_ENV;

module.exports = {
  crossOrigin: 'anonymous',
  reactStrictMode: env && env !== 'production',
  // productionBrowserSourceMaps: true, // Uncomment if sourcemap is needed for monitoring/observability
};
