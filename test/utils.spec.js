import { createBarsByNumber } from '../src/library/utils/bar.js';

describe('인자(숫자)만큼 하이픈 만들기', () => {
  test('0개일 땐 빈 문자열을 반환한다 ', () => {
    expect(createBarsByNumber(0)).toEqual('');
  });

  test('1개 이상일 때 숫자만큼의 하이픈 문자열을 반환한다', () => {
    expect(createBarsByNumber(3)).toEqual('---');
    expect(createBarsByNumber(2)).toEqual('--');
    expect(createBarsByNumber(1)).toEqual('-');
  });
});
