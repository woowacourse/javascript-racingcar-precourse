module.exports = {
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  extends: ['eslint-config-tui', 'plugin:prettier/recommended'],
  rules: {
    indent: [2, 2, {SwitchCase: 1, ignoreComments: false, ImportDeclaration: 1}],
    semi: 2,
    'no-new': 0,
    'padding-line-between-statements': 0,
    'newline-before-return': 0
  }
};
