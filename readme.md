Client repository details and how to for the Artari project

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

### Installation
Clone repo: 
```sh
git clone NeedRepoUrl
cd artari-front-end
```

Install the dependencies:
```sh
yarn install
```
or
```sh
npm install
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

### Tools and scripts
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
artari-front-end [
├─ .babelrc
├─ .codeclimate.yml
├─ .editorconfig
├─ .env
├─ .eslintignore
├─ .eslintrc.js
├─ .git
├─ .gitignore
├─ .prettierrc
├─ actions
│  ├─ index.js
│  └─ todo.js
├─ components
│  ├─ Todo.js
│  └─ TodoItem.js
├─ license
├─ next.config.js
├─ node_modules
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ _app.js
│  ├─ _document.js
│  └─ index.js
├─ readme.md
├─ reducers
│  ├─ index.js
│  └─ todos.js
├─ static
│  ├─ img
│  │  └─ favicon.ico
│  └─ manifest.json
└─ utils
   └─ store.js
```