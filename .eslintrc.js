module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
    'prettier',
    'prettier/babel',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'no-secrets', 'prettier', 'security'],
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to']
      }
    ],
    'no-secrets/no-secrets': 'error',
    'no-underscore-dangle': [
      'error',
      { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }
    ],
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
        useTabs: false
      }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  }
};
