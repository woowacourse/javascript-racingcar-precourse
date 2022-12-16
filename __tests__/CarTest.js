/* eslint-disable max-lines-per-function */
const Car = require('../src/model/Car');

describe('Car 클래스 테스트', () => {
  const names = ['abcdef', 'helloworld', '!@#$%', '', ' '];

  test.each(names)('.validate(%s)', (name) => {
    expect(() => new Car(name)).toThrow('[ERROR]');
  });

  test('랜덤값에 따른 전진 결과 반환 테스트', () => {
    const mockRandom = jest.fn().mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValue(5);
    const car = new Car('myCar');
    const expected = {
      name: 'myCar',
      moveCount: 2,
    };

    let result;

    for (let index = 0; index < 3; index += 1) {
      result = car.moveOnce(mockRandom);
    }

    expect(result).toStrictEqual(expected);
  });
});
