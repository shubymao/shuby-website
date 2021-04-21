---
name: Setting Up A CRA TypeScript project
brief: This article will go through the steps to setup a Create React App Project with typescript, eslint, and prettier.
date: 2021-04-20T21:37:39.805Z
---

# Setting Up A CRA TypeScript Project

This for setting up a Create react app project with typescript, eslint, and prettier.

## Initialize the Project

Start a new project with create-react-app and the typescript template.

`npx create-react-app my-app --template typescript`

## Running The Dev Server

Within the project directory, run the command `npm run start` to run the dev server and go to localhost:3000 to see the app running.

## Deploying the App

To Deploy the app, simply run `npm run build` and a minified version of the web app will be created in the `build` folder.

## List of Dependency Used for Linting and Prettifying

- prettier
- eslint
- @typescript-eslint/parser
- @typescript-eslint/eslint-plugin
- eslint-config-prettier
- eslint-plugin-prettier

## EsLint and Prettier Installation Steps

### Installing Dependency

To install the required linter and prettifier , run the following command.

`npm i -D prettier eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-prettier eslint-plugin-prettier`

### Create Prettier Config File

Enable the prettier setting by defining an `.prettierrc` file. Put in the content of following or with the rule of your choice.

```json
{
  "semi": true,
  "trailingComma": "none",
  "singleQuote": true,
  "printWidth": 100
}
```

### Create the ESLint Config File

Enable the eslint setting by defining an `.eslintrc` file. Put in the following content or adjust accordingly.

```json
{
  "root": true,
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint", "prettier"],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "no-console": 1, // Means warning
    "prettier/prettier": 2 // Means anything prettier find bad will be indicated as error
  }
}
```

### Enable Scripts

Add the script to lint and format the code in `package.json`. You can run them using the `npm run <script>` in the shell within the project directory.

```json
{
  ...
  "scripts": {
    ....
    "lint": "eslint . --ext .ts",
    "format": "prettier --config .prettierrc 'src/**/*.ts' --write"
  }
  ...
}
```

## Install ESLint And Prettier Extension on VSCode

Within VSCode, install go to the extension box and search for the ESlint and Prettier extension and install them.

## Tips: Setup Lint on Save for VSCode

Within your project, create a setting.json within the .vscode folder and add the following to the json.

```json
{
  ...
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.formatOnSave": true,
  ...
}
```

If you have any other project setup type recommendation, send me a email through link at the footer below. Or make a PR at the GitGub Repo.
