const checkCarNameFunctions = require('../src/app/asset/validation');

const [checkCarLength] = checkCarNameFunctions;

test('checkCarLength', () => {
    expect(checkCarLength(['abc', 'ced', 'efg'])).toBeTruthy();
    expect(checkCarLength(['moreThanFive', 'abc'])).toBeFalsy();
    expect(checkCarLength(['', 'abc'])).toBeFalsy();
});
