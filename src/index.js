import Car from './car';

export default class RacingCarGame {
  // 입력받은 자동차 이름을 배열로 반환하는 메소드
  inputCarName(carInputString) {
    const carArr = carInputString.split(',');
    for (const car of carArr) {
      if (car.length > 5) {
        return null;
      }
    }
    return carArr;
  }
}


new RacingCarGame();
