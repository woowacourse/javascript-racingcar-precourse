import Car from './car.js';

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

  // 경주 진행
  start() {
    for (let i = 0; i < this.count; i++) {
      for (const car of this.cars) {
        car.go();
      }
    }
  }
}

const carNamesInput = document.getElementById('car-names-input');
const carNamesSubmit = document.getElementById('car-names-submit');
const racingCountDiv = document.getElementById('racing-count-div');

let carArr;

// 자동차 이름 입력 후 확인 버튼 클릭
function clickCarNamesSubmit() {
  "use strict";

  carArr = RacingCarGame.inputCarName(carNamesInput.value);
  if (carArr === null) {
    alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
    return;
  }
  racingCountDiv.classList.remove('d-none');
}

carNamesSubmit.addEventListener('click', clickCarNamesSubmit);
