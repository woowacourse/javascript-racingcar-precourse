import Car from './car.js';

export default class RacingCarGame {
  constructor(cars, count) {
    this.cars = cars.map(car => new Car(car));
    this.count = count;
  }

  // 입력받은 자동차 이름을 배열로 반환하는 메소드
  static inputCarName(carInputString) {
    let carArr = carInputString.split(',');
    for (const car of carArr) {
      if (car.length > 5) {
        return null;
      }
    }
    return carArr;
  }

  // 경주 진행
  start(fun) {
    for (let i = 0; i < this.count; i++) {
      for (const car of this.cars) {
        car.go();
      }
      fun(this.cars);
    }
  }
}

const carNamesInput = document.getElementById('car-names-input');
const carNamesSubmit = document.getElementById('car-names-submit');
const racingCountDiv = document.getElementById('racing-count-div');
const racingCountInput = document.getElementById('racing-count-input');
const racingCountSubmit = document.getElementById('racing-count-submit');
const resultDiv = document.getElementById('result-div');
const result = document.getElementById('result');

let carNames;
let racingCount;

carNamesSubmit.addEventListener('click', clickCarNamesSubmit);
racingCountSubmit.addEventListener('click', clickRacingCountSubmit);

// 자동차 이름 입력 후 확인 버튼 클릭
function clickCarNamesSubmit() {
  "use strict";

  carNames = RacingCarGame.inputCarName(carNamesInput.value);
  if (carNames === null) {
    alert('자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.');
    return;
  }
  racingCountDiv.classList.remove('d-none');
}

// 시도할 횟수 입력 후 확인 버튼 클릭
function clickRacingCountSubmit() {
  "use strict";

  result.innerHTML = '';
  racingCount = parseInt(racingCountInput.value);
  resultDiv.classList.remove('d-none');

  const racingCarGame = new RacingCarGame(carNames, racingCount);
  racingCarGame.start(printRacing);
  printResult(racingCarGame.cars);
}

// 경주 과정 출력
function printRacing(cars) {
  "use strict";

  let str = "";
  for (const car of cars) {
    str += `${car}: ${'-'.repeat(car.position)}<br>`;
  }
  result.innerHTML += `<p>${str}</p>`;
}

// 경주 결과 출력
function printResult(cars) {
  "use strict";

  const reducer = (acc, cur) => {
    if (acc.length === 0 || acc[0].position === cur.position) {
      acc.push(cur);
    } else if (acc[0].position < cur.position) {
      acc = [cur];
    }
    return acc;
  };
  let maxArr = cars.reduce(reducer, []);

  maxArr = maxArr.map(car => car).join(', ');
  result.innerHTML += `<p>최종 우승자: ${maxArr}</p>`;
}
