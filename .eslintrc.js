module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'prettier',
    'eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'import/extensions': ['error', 'always'],
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-alert': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'max-classes-per-file': 'off',
    'no-use-before-define': 'off',
    'no-loop-func': 'off',
    'no-undef': 'off',
    'class-methods-use-this': 'off',
  },
};
