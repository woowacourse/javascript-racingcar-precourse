const ResultView = require('../../src/view/ResultView');

describe('ResultView 클래스 테스트', () => {
  test('레이스 결과가 들어오면 출력형식에 맞게 반환한다.', () => {
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

    const result = 'bdf: --\navc: ------\nvsd: -\nqwd: --\nbgd: -----\n';

    expect(ResultView.print(arrMap)).toEqual(result);
  });
});
