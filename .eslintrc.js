module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ['airbnb-base', 'eslint:recommended', 'plugin:prettier/recommended'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
    },
};
