const checkCarNameFunctions = [
    (carNames) => carNames.every((carName) => carName.length >= 1 && carName.length <= 5),
];

module.exports = checkCarNameFunctions;
