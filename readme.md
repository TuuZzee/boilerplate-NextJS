# Front-end Boilerplate

This repository contains the base boilerplate which we are going to use as a base to start most of
the company front-end project. The motivation is to have a set of tools already configured in order
to be able to start right away in a consistent manner. There is going to be changes and updates
along the way so keep posted! :)

This boilerplate is made using [NextJS](https://nextjs.org/), and is coming with the following
packages pre-installed and pre-configured:

- [React](https://reactjs.org/) _JavaScript library for creating user interfaces_
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) _Runtime type
  checking for React props and similar objects._
- [Redux](https://redux.js.org/) _Predictable state container for JavaScript apps_
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) _Thunk middleware for Redux._
- [Immutable](https://github.com/immutable-js/immutable-js) _Provides many Persistent Immutable data
  structures_
- [Axios](https://github.com/axios/axios) _Promise based HTTP client for the browser and node.js_
- [Eslint](https://eslint.org/) _Tool for identifying and reporting on patterns found in
  ECMAScript/JavaScript code_
- [Stylelint](https://stylelint.io/) _A mighty, modern linter that helps you avoid errors and
  enforce conventions in your styles._
- [Prettier](https://prettier.io/) _Prettier is an opinionated code formatter_
- [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) _React toastr message
  implemented with Redux_
- [RSuite](https://rsuitejs.com/) _A suite of React components, sensible UI design, and a friendly
  development experience._
- [styled-components](https://styled-components.com/) _Visual primitives for the component age. Use
  the best bits of ES6 and CSS to style your apps without stress_
- [Jest](https://github.com/facebook/jest) _Delightful JavaScript Testing_

[Notes]: Comes with prebuild localization support (defaulted to en/ko) and dark/ligth mode support
ready.

[Note2]: Some packages are locked in specific version until fix is available:

```
"stylelint": "^14.16.1", # breaking changes - migration steps required
"stylelint-config-recommended": "^9.0.0",
"stylelint-config-standard-scss": "^6.1.0",
```

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Development Workflow](#development-workflow)

### Requirements

You need to have `yarn` installed. Recommand using [n](https://github.com/tj/n) to manage node
version more easely. Node version recommanded: v16.17.1

```sh
# Install npm
brew install npm
# Install yarn
npm install --global yarn
# Install n
npm install -g n
# Install node version v16.17.1
n 16.17.1
```

### Installation

> This repository can be used as a template

First clone the repository, then install the dependencies:

```sh
yarn install
```

### Development Workflow

Create a local env setting (using the QA settings)

```sh
cp qa.env .env.local
```

Start a live-reload development server:

```sh
yarn dev
```

Generate a prod build:

```sh
yarn build
```

This repository is using Github Actions to deploy to proper environements. In order to deploy to QA
you can force push to the origin `qa` branch. For production release, just merge to `main` branch.

### Files/Folders structures

This project is running with NextJS so it follows the framework directives (`/pages` `/public`
folders). For the rest all files are under `/src`.

Here is the complete structure:

```
.
├── .github/                   # Workflow files (Github Actions)
├── .husky/                    # Husky config and scripts (pre-commits hook)
├── pages/                     # Pages folder
├── public/                    # Public assets
│ ├── img/                     # img assets
├── src/                       # Source files
│ ├── components/              # React Compoments
│ ├── context/                 # React Contexts
│ ├── locale/                  # Locale wording
│ ├── redux/                   # Redux modules (use Ducks patern)
│ ├── styles/                  # Global styling and pkgs styling imports
│ └── utils/                   # Constants, Pkgs init, tools and utils
├── .codeclimate.yml
├── .editorconfig
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── .lintstagedrc.json
├── .prettierignore
├── .prettierrc
├── .snyk
├── .stylelintignore
├── .stylelintrc
├── babel.config.js
├── jsconfig.json
├── next-config.js
├── package.json
├── yarn.lock
└── README.md
```

### Tools and scripts

The project is using `husky` and `lint-staged` with which are configure to run on git pre-commit
hooks. During this phase the code is going to be checked with Eslint and Prettier and
auto-formated/fixed when possible. A Code Checker Github action is set with the same settings and
will be executed on every Pull Request creation.

Validate Javascript files with Eslint:

```sh
yarn jsLint
```

Validate CSS and Styled Component code with StyleLint:

```sh
yarn cssLint
```

Run unit-tests suites and scenarios:

```sh
yarn test
```
