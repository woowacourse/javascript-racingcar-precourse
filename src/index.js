import Car from './car';

export default class RacingCarGame {
  constructor(cars, count) {
    this.cars = cars;
    this.count = count;
  }

  // 입력받은 자동차 이름을 Car 배열로 반환하는 메소드
  static inputCarName(carInputString) {
    const carArr = carInputString.split(',');
    for (const car of carArr) {
      if (car.length > 5) {
        return null;
      }
    }
    carArr.map(car => new Car(car));
    return carArr;
  }
}
