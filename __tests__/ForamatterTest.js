const { MOVE } = require('../src/lib/constants/message');
const { moveFormatter, nameFormatter } = require('../src/lib/utils/formatter');

describe('포멧터 검사', () => {
  test('moveFormatter - 움직임 개수에 따른 반환값', () => {
    const name = 'east';
    const move = 3;

    const result = moveFormatter(name, move);

    expect(result).toEqual(`${name}: ${MOVE}${MOVE}${MOVE}`);
  });

  test('nameFormatter - 이름을 쉼표를 기준으로 배열값으로 변환한 값 - 공백포함', () => {
    const names = 'east, west, south, north';

    const result = nameFormatter(names);

    expect(result).toEqual(['east', 'west', 'south', 'north']);
  });

  test('nameFormatter - 이름을 쉼표를 기준으로 배열값으로 변환한 값 - 공백 불포함', () => {
    const names = 'east,west,south,north';

    const result = nameFormatter(names);

    expect(result).toEqual(['east', 'west', 'south', 'north']);
  });
});
