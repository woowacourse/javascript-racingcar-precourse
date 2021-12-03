module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ['prettier'],
    extends: [
        'airbnb-base',
        'eslint:recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 13,
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                tabWidth: 4,
                semi: true,
                singleQuote: true,
                quoteProps: 'consistent',
                bracketSpacing: true,
                arrowParens: 'always',
                endOfLine: 'auto',
            },
        ],
        'no-console': 'off',
        'no-plusplus': 'off',
        'max-lines-per-function': ['error', 15],
        'max-depth': ['error', 2],
        'no-alert': 'off',
    },
};
