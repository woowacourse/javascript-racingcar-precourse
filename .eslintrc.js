export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:prettier/recommended", "airbnb-base"],
    "plugins": ["prettier"],
    "parserOptions": {
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "rules": {
        "prettier/prettier": "off",
        "no-new": "off",
        "class-methods-use-this": "off",
        "import/extensions": "off",
        "no-console": "warn",
        "no-alert": "off",
        "no-undef":"off",
        "consistent-return": "off",
        "no-underscore-dangle":"off",
        "no-restricted-syntax": ["off", "ForOfStatement"],
        "no-param-reassign":"off",
        "no-unused-expressions": [
        "error",
            {
            "allowTernary": true,
            "allowShortCircuit": true,
            "allowTaggedTemplates": true
            }
        ]
    }
};
