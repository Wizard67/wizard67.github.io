// https://github.com/michael-ciniawsky/postcss-load-config
const sortCSSmq = require('sort-css-media-queries');

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    "cssnano": {preset: 'default'},
    "css-mqpacker": {sort: sortCSSmq}
  }
}
