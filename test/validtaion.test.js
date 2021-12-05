const { checkCarName, checkRacingCntFunctions } = require('../src/app/asset/validation');

test('checkCarName', () => {
    expect(checkCarName(['abc', 'east'])).toBeTruthy();
    expect(checkCarName(['ab c', 'east'])).toBeFalsy();
    expect(checkCarName(['abcefg', 'east'])).toBeFalsy();
});

const [checkRequire, checkNumber, checkPositive] = checkRacingCntFunctions;

test('checkRequire', () => {
    expect(checkRequire('')).toBeFalsy();
    expect(checkRequire('abc')).toBeTruthy();
    expect(checkRequire(12)).toBeTruthy();
});

test('checkNumber', () => {
    expect(checkNumber('afsd')).toBeFalsy();
    expect(checkNumber('0')).toBeTruthy();
    expect(checkNumber(0)).toBeTruthy();
    expect(checkNumber(1)).toBeTruthy();
});

test('checkPositive', () => {
    expect(checkPositive(0)).toBeFalsy();
    expect(checkPositive(-1)).toBeFalsy();
    expect(checkPositive(1)).toBeTruthy();
});
