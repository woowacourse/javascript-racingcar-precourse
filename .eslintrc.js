module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-new': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'max-depth': ['error', 2],
  },
  parser: 'babel-eslint',
};
