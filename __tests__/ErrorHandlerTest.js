/* eslint-disable max-lines-per-function */
const ErrorHandler = require('../src/error/ErrorHandler');

describe('시도할 횟수 예외 처리 테스트', () => {
  const tryCounts = ['0', '-1', '1.0', '0.5', '', ' ', '6e'];

  test.each(tryCounts)('.validateTryCount(%s)', (tryCount) => {
    expect(() => ErrorHandler.validateTryCount(tryCount)).toThrow('[ERROR]');
  });
});
