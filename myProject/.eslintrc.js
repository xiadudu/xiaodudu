// // http://eslint.org/docs/user-guide/configuring

// module.exports = {
//   root: true,
//   parser: 'babel-eslint',
//   parserOptions: {
//     sourceType: 'module'
//   },
//   env: {
//     browser: true,
//   },
//   // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
//   extends: 'standard',
//   // required to lint *.vue files
//   plugins: [
//     'html'
//   ],
//   // add your custom rules here
//   'rules': {
//     "indent": ["error", 2],
//     "quotes": ["error", "double"],
//     "semi": ["error", "always"],
//     // allow paren-less arrow functions
//     'arrow-parens': 0,
//     // allow async-await
//     'generator-star-spacing': 0,
//     "no-cond-assign": ["error", "always"],
//     allow debugger during development
//     'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
//   }
// }
// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard', // airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    // enable additional rules
    "indent": ["error", 2],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // override default options for rules from base configurations
    // "comma-dangle": ["error", "always"],
    "no-cond-assign": ["error", "always"],
    // disable rules from base configurations
    "no-console": "off",
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
