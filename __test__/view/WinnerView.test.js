const WinnerView = require('../../src/view/WinnerView');

describe('WinnerView 클래스 테스트', () => {
  test('결과가 들어오면 내림차순으로 정렬한다.', () => {
    const array = [
      { key: 'bdf', value: 2 },
      { key: 'avc', value: 6 },
      { key: 'vsd', value: 1 },
      { key: 'qwd', value: 2 },
      { key: 'bgd', value: 5 },
    ];

    const arrMap = array.reduce((map, obj) => {
      map.set(obj.key, obj.value);
      return map;
    }, new Map());

    const result = [
      ['avc', 6],
      ['bgd', 5],
      ['bdf', 2],
      ['qwd', 2],
      ['vsd', 1],
    ];

    expect(WinnerView.sortByScore(arrMap)).toEqual(result);
  });

  test('승자를 결정한다.', () => {
    const array = [
      { key: 'bdf', value: 2 },
      { key: 'avc', value: 6 },
      { key: 'vsd', value: 1 },
      { key: 'qwd', value: 2 },
      { key: 'bgd', value: 5 },
    ];

    const arrMap = array.reduce((map, obj) => {
      map.set(obj.key, obj.value);
      return map;
    }, new Map());

    const result = '최종 우승자: avc';

    expect(WinnerView.getWinner(arrMap)).toEqual(result);
  });
});
