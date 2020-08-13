# Development guide

## Setting up

Ensure yarn is installed globally

```
npm i -g yarn
```

Run yarn to install dependencies

```
yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Deploying

To deploy a new release be sure to have an `electron-builder.yml` file in the root

```yml
appId: com.example.MystaliaManager
publish:
  provider: github
  token: [GITHUB PERSONAL ACCESS TOKEN]
```

```
yarn deploy
```
