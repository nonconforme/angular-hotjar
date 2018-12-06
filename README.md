# @nonconforme/stencil-environment

This package is used to easily add an environment file at build.

First, npm install within the project:

```
npm install @nonconforme/stencil-environment --save
```

Next, within the project's `stencil.config.js` file, import the plugin and add it to the config's `plugins` config:

#### stencil.config.ts
```ts
import { Config } from '@stencil/core';
import { environments } from '@nonconforme/stencil-environment';

export const config: Config = {
  plugins: [
    environments(proc, root_env_pathpath, global_env_path)
  ]
};
```

### Add global environment
  * Create a `global/` directory inside `src/` and add an empty `environment.tsx` file into `global/` directory.
  * Create an `environments/` directory at same level than `src/` and add three files inside `local.js`, `production.js`, `tis.js`
  * Update your package.json scripts with this three lines :
    ```
      {
        ...
        "scripts": {
          "start-local": "stencil build --dev --watch --serve --env_local",
          "start-prod": "stencil build --dev --watch --serve --env_prod",
          "start-tis": "stencil build --dev --watch --serve --env_tis",
          ...
        }
    ```

### Configuration example
```js
exports.config = {
  plugins: [
    environments(process, './environments/', 'src/global/environment.tsx')
  ]
};
```

## Related

* [Nonconforme](https://github.com/nonconforme)
* [Stencil](https://stenciljs.com/)

## Contributing

Please see our [Contributor Code of Conduct](https://github.com/ionic-team/ionic/blob/master/CODE_OF_CONDUCT.md) for information on our rules of conduct.