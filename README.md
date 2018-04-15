# 🌿 Calypharma Consulting Inc

## Setup

Main things to do are to install build dependecies, build the site `/dist` and build semantic.

1. `npm install`
2. Choose default semantic installations `./semantic`
3. `cd ./semantic` && `gulp build`
4. Return to root folder and `gulp build`

## Development

Open `/dist/index.html` in browser, and run `gulp build` or `gulp watch`.

- `gulp build`: Run build tasks for `/src` files. Output to `/dist`.
  - HTML: Minify
  - JavaScript: Transpile (ES6 > ES5), Concat, Minify
  - Sass/CSS: Compile, Minify, AutoPrefix, Concat
  - Images: Optimize
  - Other: Move files (ex: favicon.ico)
- `gulp watch`: Watch for file changes in `/src` and run `gulp build` on change.

## Deployment

Running NGINX webserver on Ubuntu 16.04.
