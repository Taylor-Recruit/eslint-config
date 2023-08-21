# ESLint configuration of Team FareAmt

This package includes the shareable [ESLint](https://eslint.org) configuration that Team FareAmt uses in their
projects.

It was inspired by https://github.com/airbnb/javascript and https://github.com/facebook/create-react-app but less
opinionated.

## Installation

## Gitlab Registry

1. Create your
   own [Personal Access Token](https://git.flix.tech/-/profile/personal_access_tokens?scopes=api&name=Gitlab%20NPM%20Registry)
   and copy it into buffer. We will need it later. Expiration date can be cleared unless you want to renew it every
   month.
2. Create an .npmrc file with the following configuration and replace <your_token> withe one you've created

```
always-auth=true

@pricing:registry=https://git.flix.tech/api/v4/packages/npm/
//git.flix.tech/api/v4/packages/npm/:_authToken=<your_token>
//git.flix.tech/api/v4/projects/:_authToken=<your_token>
```

NOTE: You can also create it in your home directory to enable it globally for all projects.

### React App

1. Install this package, ESLint and the necessary dependencies

```sh
yarn add -D @pricing/eslint-config-fareamt @babel/core@^7.0.0 @babel/eslint-parser@^7.0.0 @babel/preset-react@^7.0.0 \
            eslint@^8.0.0 eslint-plugin-jsx-a11y@^6.0.0 eslint-plugin-react@^7.0.0 eslint-plugin-react-hooks@^4.0.0
```

for typescript projects install additional dependencies

```shell
yarn add -D typescript@^5 @typescript-eslint/eslint-plugin@^6 @typescript-eslint/parser@^6
```

2. Create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": ["@pricing/fareamt"]
}
```

3. You can override the settings from `@pricing/fareamt` by editing the `.eslintrc` file. Learn more
   about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

```json
{
  "extends": ["@pricing/fareamt"],
  "rules": {
    "some-annoying-rule": "off"
  }
}
```

4. If you are using the new JSX transform from React 17, add "@pricing/fareamt/jsx-runtime" to "extends" to disable
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
  "extends": ["@pricing/fareamt/react-recommended"]
}
```

> NOTE: It is also includes Jest, Testing Library, Prettier rules

### NodeJS App

1. Install this package, ESLint and the necessary plugins

```sh
yarn add -D @pricing/eslint-config-fareamt eslint@^8.0.0
```

for typescript projects install additional dependencies

```shell
yarn add -D typescript@^4.0.0 @typescript-eslint/eslint-plugin@^5.0.0 @typescript-eslint/parser@^5.0.0
```

2. Create a file named `.eslintrc` with following contents in the root folder of your project:

```json
{
  "extends": ["@pricing/fareamt/node"]
}
```

3. You can override the settings from `@pricing/fareamt` by editing the `.eslintrc` file. Learn more
   about [configuring ESLint](http://eslint.org/docs/user-guide/configuring) on the ESLint website.

```json
{
  "extends": ["@pricing/fareamt/node"],
  "rules": {
    "some-annoying-rule": "off"
  }
}
```

### NodeJS App (Recommended)

You can also enable all recommended rules for your NodeJS App with only one config that combines all recommended rules

```json
{
  "extends": ["@pricing/fareamt/node-recommended"]
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
  "extends": ["@pricing/fareamt", "@pricing/fareamt/jest"]
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
  "extends": ["@pricing/fareamt", "@pricing/fareamt/jest", "@pricing/fareamt/testing-library"]
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
  "extends": ["@pricing/fareamt", "@pricing/fareamt/prettier"]
}
```

### Accessibility Checks

Some basic rules from the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y) plugin are
activated:

If you want to enable even more accessibility rules, you can create an `.eslintrc` file in the root of your project with
this content:

```json
{
  "extends": ["@pricing/fareamt", "plugin:jsx-a11y/recommended"],
  "plugins": ["jsx-a11y"]
}
```

## Troubleshooting

### Error running Yarn with the Package Registry for npm registry

If you are using Yarn with the npm registry, you may get an error message like:

```bash
  yarn add -D @pricing/eslint-config-fareamt

  yarn add v1.22.19
  [1/4] 🔍  Resolving packages...
  [2/4] 🚚  Fetching packages...
  error An unexpected error occurred: "https://git.flix.tech/api/v4/projects/7362/packages/npm/@pricing/eslint-config-fareamt/-/@pricing/eslint-config-fareamt-x.x.x.tgz: Request failed \"404 Not Found\"".
  info If you think this is a bug, please open a bug report with the information provided in "<your project>/yarn-error.log".
  info Visit https://yarnpkg.com/en/docs/cli/add for documentation about this command.
```

In this case, try adding this to your .npmrc file (and replace <your_token> with your personal access token or deploy
token):

```bash
//git.flix.tech/api/v4/projects/:_authToken=<your_token>
```
