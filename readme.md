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
- [React Query](https://github.com/tannerlinsley/react-query) _Hooks for fetching, caching and
  updating asynchronous data in React_
- [Axios](https://github.com/axios/axios) _Promise based HTTP client for the browser and node.js_
- [AWS Amplify](https://github.com/aws-amplify/amplify-js) _AWS Amplify provides a declarative and
  easy-to-use interface across different categories of cloud operations._
- [Eslint](https://eslint.org/) _Tool for identifying and reporting on patterns found in
  ECMAScript/JavaScript code_
- [Prettier](https://prettier.io/) _Prettier is an opinionated code formatter_
- [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) _React toastr message
  implemented with Redux_
- [reactstrap](https://reactstrap.github.io/) _Easy to use React Bootstrap 4 components_ ... And
  even more :)
- [Serverless-NextJS](https://github.com/serverless-nextjs/serverless-next.js) _A zero configuration
  Next.js serverless component for AWS Lambda@Edge aiming for full feature parity._ and some others
  always usefull and cool packages such as BigNumber, Moment, Lodash/fp ... [Note]: for more details
  check the `package.json` file.

This can be used as a template to create new repositories and projects. For feature/bug fixing you
can open a PR from the project or create a Issue on the repository.

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Tools and scripts](#tools-and-scripts)

### Requirements

You need to have `npm` or `yarn` installed. Recommand using [n](https://github.com/tj/n) to manage
node version more easely.

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
# With Yarn
yarn dev

# With npm
npm run dev
```

Generate a production build:

```sh
# With Yarn
yarn build

# With npm
npm run build
```

[Note] This project is using `dotenv-webpack` package to manage env values. Each env has is own
file, dev is using `.env`.

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

### License

MIT
