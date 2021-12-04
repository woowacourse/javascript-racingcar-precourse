module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2015,
    sourceType: 'module',
  },
  rules: {
    'no-new': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-undef': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'import/extensions': 'off',
    'max-depth': ['error', 2],
  },
};
