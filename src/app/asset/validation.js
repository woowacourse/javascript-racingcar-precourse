const checkCarNameFunctions = [
    (names) => names.every((name) => name.length >= 1 && name.length <= 5),
    (names) => names.every((name) => name.length === name.replace(/\s/g, '')),
];

module.exports = checkCarNameFunctions;
