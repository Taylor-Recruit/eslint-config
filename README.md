# ESLint configuration

This package includes the shareable [ESLint](https://eslint.org) configuration that our team uses in their
projects.

It was inspired by https://github.com/airbnb/javascript and https://github.com/facebook/create-react-app but less
opinionated.

## Installation

## Github Registry

1. Create an .npmrc file with the following configuration

```
@taylor-recruit:registry=https://npm.pkg.github.com
```

NOTE: You can also create it in your home directory to enable it globally for all projects.

### React App

1. Install this package, ESLint and the necessary dependencies

```sh
yarn add -D @taylor-recruit/eslint-config @babel/core@^7.0.0 @babel/eslint-parser@^7.0.0 @babel/preset-react@^7.0.0 \
            eslint@^8.0.0 eslint-plugin-jsx-a11y@^6.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^4.0.0
```

for typescript projects install additional dependencies

```shell
yarn add -D typescript@^5 @typescript-eslint/eslint-plugin@^6 @typescript-eslint/parser@^6
```

2. Create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": ["@taylor-recruit/eslint-config"]
}
```

3. You can override the settings from `@taylor-recruit/eslint-config` by editing the `.eslintrc` file. Learn more
   about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

```json
{
  "extends": ["@taylor-recruit/eslint-config"],
  "rules": {
    "some-annoying-rule": "off"
  }
}
```

4. If you are using the new JSX transform from React 17, add "@taylor-recruit/eslint-config/jsx-runtime" to "extends" to disable
   the relevant rules.

5. Add a script to you package.json to check your project with Eslint.

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "yarn lint --fix"
  }
}
```

### React App (Recommended)

You can also enable all recommended rules for your React App with only one config that combines all recommended rules

```json
{
  "extends": ["@taylor-recruit/eslint-config/react-recommended"]
}
```

> NOTE: It is also includes Jest, Testing Library, Prettier rules

### NodeJS App

1. Install this package, ESLint and the necessary plugins

```sh
yarn add -D @taylor-recruit/eslint-config eslint@^8.0.0
```

for typescript projects install additional dependencies

```shell
yarn add -D typescript@^4.0.0 @typescript-eslint/eslint-plugin@^5.0.0 @typescript-eslint/parser@^5.0.0
```

2. Create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": ["@taylor-recruit/eslint-config/node"]
}
```

3. You can override the settings from `@taylor-recruit/eslint-config` by editing the `.eslintrc` file. Learn more
   about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

```json
{
  "extends": ["@taylor-recruit/eslint-config/node"],
  "rules": {
    "some-annoying-rule": "off"
  }
}
```

### NodeJS App (Recommended)

You can also enable all recommended rules for your NodeJS App with only one config that combines all recommended rules

```json
{
  "extends": ["@taylor-recruit/eslint-config/node-recommended"]
}
```

> NOTE: It is also includes Jest, Prettier rules

That's it!

## Extensions

### Jest rules

This config also ships with optional Jest rules for ESLint (based
on [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest))

1. Install the ESLint plugin for Jest and Testing Library (if you don't already have them installed).

```sh
yarn add -D jest eslint-plugin-jest
```

2. Enable these rules by adding the Jest config to the `extends` array in your ESLint config.

```json
{
  "extends": ["@taylor-recruit/eslint-config", "@taylor-recruit/eslint-config/jest"]
}
```

If you want to extend it with [`eslint-plugin-testing-library`](https://github.com/testing-library/eslint-plugin-testing-library)) rules,
then add it also into your app.

```sh
yarn add -D  eslint-plugin-testing-library
```

and enable additional rules

```json
{
  "extends": [
    "@taylor-recruit/eslint-config",
    "@taylor-recruit/eslint-config/jest",
    "@taylor-recruit/eslint-config/testing-library"
  ]
}
```

### Prettier rules

This config also ships with optional Prettier rules for ESLint.

1. Install the Prettier tool (if you don't already have them installed).

```sh
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
```

2. Enable these rules by adding the Prettier config to the `extends` array in your ESLint config. Make sure to put it
   last, so it gets the chance to override other configs.

```json
{
  "extends": ["@taylor-recruit/eslint-config", "@taylor-recruit/eslint-config/prettier"]
}
```

### Accessibility Checks

Some basic rules from the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) plugin are
activated:

If you want to enable even more accessibility rules, you can create an `.eslintrc` file in the root of your project with
this content:

```json
{
  "extends": ["@taylor-recruit/eslint-config", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```
