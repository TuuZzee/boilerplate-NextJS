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
- [reactstrap](https://reactstrap.github.io/) _Easy to use React Bootstrap 4 components_ ... And
  even more :)
- [styled-components](https://styled-components.com/) _Visual primitives for the component age. Use
  the best bits of ES6 and CSS to style your apps without stress_
- [Serverless-NextJS](https://github.com/serverless-nextjs/serverless-next.js) _A zero configuration
  Next.js serverless component for AWS Lambda@Edge aiming for full feature parity._ and some others
  always usefull and cool packages such as BigNumber, Moment, Lodash/fp ... [Note]: for more details
  check the `package.json` file.

[Notes]:

Comes with prebuild localization support (defaulted to en/ko) and dark/ligth mode support ready.

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Development Workflow](#development-workflow)

### Requirements

You need to have `npm` or `yarn` installed. Recommand using [n](https://github.com/tj/n) to manage
node version more easely. Node version recommanded: v14.15.4

```sh
brew install npm
```

For deployment you will need a AWS account.
[Serverless-NextJS](https://github.com/serverless-nextjs/serverless-next.js) is used for CI/CD.

### Installation

> This repository can be used as a template

First clone the repository, then install the dependencies:

```sh
# With Yarn
yarn install

# With npm
npm install
```

### Development Workflow

Start a live-reload development server:

```sh
npm run dev
```

Create a local env setting (using the QA settings)

```sh
cp qa.env .env.local
```

Generate a prod build:

```sh
npm run build
```

This repository is using Github Actions to deploy to proper environements. In order to deploy to QA
you can force push to the origin `qa` branch. For production release, just merge to `main` branch.

### Files/Folders structures

This project is running with NextJS so it follows the framework directives (`/pages` `/public`
folders). For the rest all files are under `/src`.

Here is the complete structure:

```
.
├── .github/
├── node_modules/
├── build/                     # Build Folders for serverless config files
│ ├── production/              # Production Env config files (serverless + .env)
│ ├── qa/                      # QA Env config files (serverless + .env)
├── pages/                     # Pages folder
├── public/                    # Public assets
│ ├── img/                     # img assets
├── src/                       # Source files
│ ├── components/              # React Compoments
│ ├── context/                 # React Contexts
│ ├── locale/                  # Locale wording
│ ├── redux/                   # Redux stuffs (use Ducks patern)
│ ├── styles/                  # Global styling and pkgs styling imports
│ └── utils/                   # Constants, Pkgs clients init, tools and utils
├── .eslintrc.js
├── .eslintignore
├── .firebaserc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── firebase.json
├── jsconfig.json
├── next-config.js
├── package.json
├── package-lock.json
└── README.md
```

### Tools and scripts

The project is using `husky` and `lint-staged` with which are configure to run on git pre-commit
hooks During this phase the code is going to be checked with Eslint and Prettier and
auto-formated/fixed when possible.

How to run Eslint (from root file):

```sh
./node_modules/.bin/eslint --fix ./
```

How to run prettier:

```sh
npm run format
```
