const homePath = '/';

module.exports = {
  inner: {
    validPaths: [homePath],
    home: homePath,
  },
  external: {
    bulldax: process.env.BULLDAX_DOMAIN,
  },
  hanbitcoApi: {
    auth: {
      loginCheck: 'auth/login/check',
      loginSuccess: 'auth/login/success',
      loginFail: 'auth/login/fail',
      logout: 'auth/logout',
    },
    users: {
      userDetails: 'users',
    },
  },
  email: {},
};
