module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:lodash-fp/recommended',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', 'no-secrets', 'security', 'import', 'lodash-fp'],
  rules: {
    'no-nested-ternary': 'off',
    'security/detect-object-injection': 'off',
    'default-case': [
      'error',
      {
        commentPattern: '^skip\\sdefault',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-console':
      process.env.APP_ENV === 'production'
        ? ['error']
        : [
            'error',
            {
              allow: ['debug', 'warn', 'error'],
            },
          ],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft', 'stateValidate'],
      },
    ],
    'no-secrets/no-secrets': 'error',
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__REDUX_DEVTOOLS_EXTENSION__'],
      },
    ],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        bracketSpacing: true,
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxBracketSameLine: false,
        jsxSingleQuote: false,
        printWidth: 100,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: true,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
