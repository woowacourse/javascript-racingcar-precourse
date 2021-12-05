const checkCarNameFunctions = require('../src/app/asset/validation');

const [checkCarLength, checkSpace] = checkCarNameFunctions;

test('checkCarLength', () => {
    expect(checkCarLength(['abc', 'ced', 'efg'])).toBeTruthy();
    expect(checkCarLength(['moreThanFive', 'abc'])).toBeFalsy();
    expect(checkCarLength(['', 'abc'])).toBeFalsy();
});

test('checkSpace', () => {
    expect(checkSpace(['abc', 'ced', 'efg'])).toBeTruthy();
    expect(checkSpace(['ab c', 'ced', 'efg'])).toBeFalsy();
});
