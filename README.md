# gatsby-plugin-direct-import

Gatsby plugin to use Babel plugin direct import and make it tree shaking.

## Install

`npm install --save gatsby-plugin-direct-import`

## How to use

Add the plugin to your `gatsby-config.js`.

```javascript
plugins: [
  {
    resolve: `gatsby-plugin-direct-import`,
    options: {
      packages: [
        "my-package-name",
        {
          "name": "my-package-name/sub-package",
          "indexFile": "my-package-name/sub-package/index.es.js"
        }
      ],
    },
  },
];
```
