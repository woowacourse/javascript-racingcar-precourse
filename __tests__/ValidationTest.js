const { carNameValidation, countValidation } = require('../src/lib/utils/validation');

describe('자동차 이름 유효성 검사', () => {
  test('아무것도 입력하지 않을 경우', () => {
    const message = '';
    expect(() => {
      carNameValidation(message);
    }).toThrow('[ERROR]');
  });
  test('이름이 5글자 이상일 경우', () => {
    const message = 'abcdefghij';
    expect(() => {
      carNameValidation(message);
    }).toThrow('[ERROR]');
  });
  test('이름이 쉼표 끝날 경우', () => {
    const message = 'aaaa,aaaaa,';
    expect(() => {
      carNameValidation(message);
    }).toThrow('[ERROR]');
  });
});

describe('시도 횟수 유효성 검사', () => {
  test('아무것도 입력하지 않을 경우', () => {
    const message = '';
    expect(() => {
      countValidation(message);
    }).toThrow('[ERROR]');
  });
  test('문자를 입력했을 경우', () => {
    const message = '문자';
    expect(() => {
      countValidation(message);
    }).toThrow('[ERROR]');
  });
  test('0을 입력할 경우', () => {
    const message = '0';
    expect(() => {
      countValidation(message);
    }).toThrow('[ERROR]');
  });
  test('00을 입력할 경우', () => {
    const message = '00';
    expect(() => {
      countValidation(message);
    }).toThrow('[ERROR]');
  });
});
