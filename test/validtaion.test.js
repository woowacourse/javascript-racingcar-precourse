const { checkCarName, checkRacingCnt } = require('../src/app/asset/validation');

test('checkCarName', () => {
    expect(checkCarName(['abc', 'east'])).toBeTruthy();
    expect(checkCarName(['ab c', 'east'])).toBeFalsy();
    expect(checkCarName(['abcefg', 'east'])).toBeFalsy();
});

test('checkRacingCnt', () => {
    expect(checkRacingCnt('')).toBeFalsy();
    expect(checkRacingCnt('abc')).toBeFalsy();
    expect(checkRacingCnt(12)).toBeTruthy();
    expect(checkRacingCnt(1)).toBeTruthy();
    expect(checkRacingCnt('afsd')).toBeFalsy();
    expect(checkRacingCnt(0)).toBeFalsy();
    expect(checkRacingCnt(-1)).toBeFalsy();
});
