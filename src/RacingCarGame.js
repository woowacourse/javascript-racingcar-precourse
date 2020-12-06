import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';
import RandomNumber from './RandomNumber.js';
import Winner from './Winner.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();
  randomNumber = new RandomNumber();

  constructor() {
    this.start();
  }

  // 처음 확인 버튼을 눌렀을 때
  start() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      this.submitCarNames();
    });
  }

  submitCarNames() {
    const carNamesList = this.getCarName();

    if (carNamesList !== null) {
      this.showCountRacing();
      this.submitCountRacing(carNamesList);
    }
  }

  // 차 이름 가져오기
  getCarName() {
    const carNamesString = this.carNames();
    const carNamesArray = this.exceptionHandler.isCarNames(carNamesString);

    return carNamesArray;
  }

  carNames() {
    const carNamesInput = document.querySelector('#car-names-input');

    return carNamesInput.value;
  }

  showCountRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }

  submitCountRacing(_carNames) {
    const racingCountSubmit = document.querySelector('#racing-count-submit');

    racingCountSubmit.addEventListener(
      'click',
      () => {
        this.countRacingClick(_carNames);
      },
      { once: true }
    );
  }

  countRacingClick(_carNames) {
    const countNumber = this.getCountNumber();

    if (this.exceptionHandler.isCountNumber(countNumber)) {
      this.repeatRunRacing(countNumber, _carNames);
      this.showResult();
    } else {
      alert('알맞은 숫자를 입력해주세요');
      // [예외] 예외일 경우 재귀로,, 메모리 유출 가능성 => TODO: while문으로 만들기
      this.submitCountRacing(_carNames);
    }
  }

  getCountNumber() {
    const racingCountInput = document.querySelector('#racing-count-input');

    return racingCountInput.value;
  }

  showResult() {
    const resultContainer = document.querySelector('#result-container');

    resultContainer.style.display = 'block';
  }

  repeatRunRacing(_countNumber, _carNames) {
    const carObjArray = this.setCar(_carNames);

    for (let i = 0; i < _countNumber; i++) {
      this.runRacing(carObjArray);
      this.spaceHTML();
    }

    this.winnerToDom(carObjArray, _carNames);
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }

  runRacing(carObjArray) {
    carObjArray.forEach((car) => {
      const goSign = this.randomNumber.init();

      if (goSign) {
        car.position++;
      }

      this.stringHTMLToDOM(this.stringHTML(car));
    });
  }

  spaceHTML() {
    const p = document.createElement('br');

    document.querySelector('#result-container').appendChild(p);
  }

  stringHTML(_car) {
    const distance = '-';
    let totalDistance = '';

    if (_car.position > 0) {
      for (let i = 0; i < _car.position; i++) {
        totalDistance += distance;
      }
    }

    return `${_car.name}: ${totalDistance}`;
  }

  stringHTMLToDOM(_htmlString) {
    const p = document.createElement('p');

    p.innerHTML = _htmlString;
    document.querySelector('#result-container').appendChild(p);
  }

  winnerToDom(carObjArray, _carNames) {
    const winner = new Winner(carObjArray, _carNames);
    const winnerHTML = winner.winnerHTML(carObjArray);

    this.stringHTMLToDOM(winnerHTML);
  }
}

// 출력 class 나누기.
// TODO: 다시 확인 눌렀을 때 초기화 하고 출력 구현.
// TODO: querySelector 위에 상수로 모아버리기.
// TODO: 함수 단위 기능별로 쪼개기.
// TODO: _carNames의 반복... > constructor로 올려버리기.
