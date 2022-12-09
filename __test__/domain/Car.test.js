const Car = require('../../src/domain/Car');

describe('Car 클래스 테스트', () => {
  test('4 미만숫자가 들어오면 전진하지 않는다.', () => {
    const car = new Car('mike');
    car.goOrstop(1);

    expect(car.getResult()).toEqual(['mike', 0]);
  });

  test('4 이상숫자가 들어오면 전진하지 않는다.', () => {
    const car = new Car('abc');
    car.goOrstop(5);

    expect(car.getResult()).toEqual(['abc', 1]);
  });
});
