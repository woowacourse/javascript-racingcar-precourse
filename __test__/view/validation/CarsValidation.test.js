const CarsValidation = require('../../../src/view/validation/CarsValidator');

describe('CarsValidation 클래스 테스트', () => {
  test('문자열을 넣으면 콤마로 split된 배열을 반환한다.', () => {
    const str = 'east, west, south, north';
    expect(CarsValidation.split(str)).toEqual([
      'east',
      ' west',
      ' south',
      ' north',
    ]);
  });

  test.each([['east', 'farm', 'a']])(
    '자동차 이름 길이가 1부터 5사이면 true를 반환한다.',
    (str) => expect(CarsValidation.isValidSize(str)).toBeTruthy(),
  );

  test.each([['east, west, south, north', 'farm,hmph,even']])(
    '자동차가 2대 이상 입력이 되면 true를 반환한다. ',
    (str) => expect(CarsValidation.canPlay(str)).toBeTruthy(),
  );

  test.each([['east', 'farm', 'a']])(
    '자동차가 2대 이상 입력이 되면 false를 반환한다. ',
    (str) => expect(CarsValidation.canPlay(str)).toBeFalsy(),
  );

  test('자동차 이름이 중복되면 false를 반환한다. ', () => {
    const arr = 'a,a,b,b,c';
    expect(CarsValidation.isDuplicate(arr)).toBeFalsy();
  });
});
