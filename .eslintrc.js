module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["airbnb-base", "plugins:prettier/recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaVersion: 13,
        sourceType: "module",
    },
    rules: {
        "no-console": "off",
    },
};
