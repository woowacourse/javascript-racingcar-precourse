const AttemptsValidator = require('../../../src/view/validation/AttemptsValidator');

describe('AttemptsValidator 클래스 테스트', () => {
  test.each([['가나다', '1 9', '00000', '9!9']])(
    '숫자가 아니면 false를 반환한다.',
    (str) => {
      expect(AttemptsValidator.isNumber(str)).toBeFalsy();
    },
  );

  test.each([['1', '10', '1000000', '19237']])(
    '숫자가 맞으면 true를 반환한다.',
    (str) => {
      expect(AttemptsValidator.isNumber(str)).toBeTruthy();
    },
  );
});
