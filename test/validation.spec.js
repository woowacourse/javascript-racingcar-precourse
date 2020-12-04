import CarNamesInput from '../src/components/car-names-input.js';

describe('자동차 이름 입력 검증', () => {
  let carGameContainer;
  const $target = document.createElement('div');

  beforeEach(() => {
    carGameContainer = new CarNamesInput($target);
  });

  test('입력 자체가 빈 문자열이면 안된다', () => {
    expect(carGameContainer.isValidInput('')).toBe(false);
  });

  test('이름이 5자를 넘으면 안된다', () => {
    expect(carGameContainer.isValidInput('123456, 123, 123')).toBe(false);
  });

  test('이름이 빈 문자열이면 안된다', () => {
    expect(carGameContainer.isValidInput('1,,2')).toBe(false);
  });
});
