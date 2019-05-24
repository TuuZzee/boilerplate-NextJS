# Front-end Boilerplate

This repository contains the base boilerplate which we are going to use as a base to start most of the company front-end project. The motivation is to have a set of tools already configured in order to be able to start right away in a consistent manner. There is going to be changes and updates along the way so keep posted! :)

This boilerplate is made from [NextJS](https://nextjs.org/), and is coming with the following packages installed and configured:

- [React](https://reactjs.org/) _JavaScript library for creating user interfaces_
- [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) _Runtime type checking for React props and similar objects._
- [Redux](https://redux.js.org/) _Predictable state container for JavaScript apps_
- [Immutable](https://github.com/immutable-js/immutable-js) _Provides many Persistent Immutable data structures_
- [Axios](https://github.com/axios/axios) _Promise based HTTP client for the browser and node.js_
- [Eslint](https://eslint.org/) _Tool for identifying and reporting on patterns found in ECMAScript/JavaScript code_
- [Prettier](https://prettier.io/) _Prettier is an opinionated code formatter_

[Note]: for more details check the `package.json` file.

When starting a new project, fork from this one a create a new repository. For feature/bug fixing you can open a PR from the project or create a Issue on the repository.

## Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Tools and scripts](#tools-and-scripts)

### Requirements

You need to have `npm` installed.

```sh
brew install npm
```

This boilerplate is using Firebase hosting to deploy as a static HTML PWA.

```sh
npm install -g firebase-tools
```

### Installation

Clone repo:

```sh
git clone https://git-codecommit.us-west-2.amazonaws.com/v1/repos/boilerplate-front-end
cd boilerplate-front-end
```

Install the dependencies:

```sh
yarn install
```

or

```sh
npm install
```

Get your credential for Firebase and proceed to the installation:

```sh
firebase login                    # Request Firebase project access beforehand
firebase init                     # Follow the instruction from the promp
```

[Note]: Use `NAME_OF_PROJECT-dev` as the default environment, select hosting and for SPA input NO.
Add the other envs so you are able to deploy

```sh
firebase use --add                # Follow the instruction from the promp
```

### Development Workflow

Start a live-reload development server:

```sh
yarn dev
```

or

```sh
npm run dev
```

Generate a production build:

```sh
yarn build
```

or

```sh
npm run build
```

To deploy to DEV/QA/PRODUCTION environment:

```sh
npm run deploy-dev                # For QA: deploy-qa; For Production: deploy-prod
```

[Note] This project is using `dotenv-webpack` package to manage env values. Each env has is own file, dev is using `.env`.

### Tools and scripts

The project is using `husky` and `lint-staged` with which are configure to run on git pre-commit hooks
During this phase the code is going to be checked with Eslint and Prettier and auto-formated/fixed when possible.

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

#### Project Tree

To Run and update you it can run the VScode extention [project-tree](https://marketplace.visualstudio.com/items?itemName=zhucy.project-tree). Install the plugin, press `ctrl+shift+p` and enter `Project Tree` to enter.

```
boilerplate-front-end
├─ .babelrc
├─ .codeclimate.yml
├─ .editorconfig
├─ .env
├─ .eslintignore
├─ .eslintrc.js
├─ .firebaserc
├─ .gitignore
├─ .prettierrc
├─ actions
│  ├─ index.js
│  └─ todo.js
├─ components
│  ├─ Todo.js
│  ├─ TodoItem.js
│  └─ common
│     ├─ Layout.js
│     └─ Nav.js
├─ firebase.json
├─ license
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ 404.html
│  ├─ _app.js
│  ├─ _document.js
│  ├─ about.js
│  └─ index.js
├─ production.env
├─ qa.env
├─ readme.md
├─ reducers
│  ├─ index.js
│  └─ todos.js
├─ static
│  ├─ img
│  │  └─ favicon.ico
│  └─ manifest.json
└─ utils
   ├─ firebaseApp.js
   └─ store.js
```
