module.exports = {
  env: { browser: true, es6: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended',
    'plugin:lodash-fp/recommended',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  globals: { Atomics: 'readonly', SharedArrayBuffer: 'readonly' },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'lodash-fp',
    'no-secrets',
    'prettier',
    'react-hooks',
    'react',
    'security',
    '@typescript-eslint',
  ],
  rules: {
    'no-nested-ternary': 'off',
    'security/detect-object-injection': 'off',
    'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'no-console':
      process.env.NEXT_PUBLIC_APP_ENV === 'production'
        ? ['error', { allow: ['warn', 'error'] }]
        : ['error', { allow: ['debug', 'warn', 'error'] }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['draft', 'stateValidate'],
      },
    ],
    'no-secrets/no-secrets': 'error',
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION__'] }],
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
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-one-expression-per-line': 'off', // Conflicts with prettier
    'react/jsx-curly-newline': 'off', // Conflicts with prettier
  },
  settings: {
    'import/resolver': { node: { paths: ['.'] }, typescript: {} },
  },
};
