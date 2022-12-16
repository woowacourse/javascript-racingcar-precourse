/* eslint-disable max-lines-per-function */
const CarGame = require('../src/model/CarGame');

describe('우승자 구하기 테스트', () => {
  const table = [
    {
      movingResult: [
        { name: 'car1', moveCount: 1 },
        { name: 'car2', moveCount: 2 },
        { name: 'car3', moveCount: 3 },
      ],
      expected: ['car3'],
    },
    {
      movingResult: [
        { name: 'a', moveCount: 5 },
        { name: 'b', moveCount: 5 },
        { name: 'c', moveCount: 3 },
      ],
      expected: ['a', 'b'],
    },
  ];

  test.each(table)('.getWinner(%o)', ({ movingResult, expected }) => {
    expect(CarGame.getWinner(movingResult)).toEqual(expected);
  });
});
