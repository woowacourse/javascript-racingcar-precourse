module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-alert': 'off',
    'import/extensions': ['error', 'always'],
    'max-depth': ['error', 2],
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
};
