import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';
import RandomNumber from './RandomNumber.js';
import Winner from './Winner.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();
  randomNumber = new RandomNumber();

  constructor() {
    this.carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.carNamesInput = document.querySelector('#car-names-input');
    this.countContainer = document.querySelector('#count-container');
    this.racingCountSubmit = document.querySelector('#racing-count-submit');
    this.racingCountInput = document.querySelector('#racing-count-input');
    this.resultContainer = document.querySelector('#result-container');

    this.start();
  }

  // 처음 확인 버튼을 눌렀을 때
  start() {
    this.carNamesSubmitButton.addEventListener('click', () => {
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
    const carNames = this.carNamesInput.value;
    const carNamesArray = this.exceptionHandler.isCarNames(carNames);

    return carNamesArray;
  }

  showCountRacing() {
    this.countContainer.style.display = 'block';
  }

  submitCountRacing(_carNames) {
    this.racingCountSubmit.addEventListener(
      'click',
      () => {
        this.countRacingClick(_carNames);
      },
      { once: true }
    );
  }

  countRacingClick(_carNames) {
    const countNumber = this.racingCountInput.value;

    if (this.exceptionHandler.isCountNumber(countNumber)) {
      this.repeatRunRacing(countNumber, _carNames);
      this.showResult();
    } else {
      alert('알맞은 숫자를 입력해주세요');
      // [예외] 예외일 경우 재귀로,, 메모리 유출 가능성 => TODO: while문으로 만들기
      this.submitCountRacing(_carNames);
    }
  }

  showResult() {
    this.resultContainer.style.display = 'block';
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
    const blank = document.createElement('br');

    this.resultContainer.appendChild(blank);
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
    this.resultContainer.appendChild(p);
  }

  winnerToDom(carObjArray, _carNames) {
    const winner = new Winner(carObjArray, _carNames);
    const winnerHTML = winner.winnerHTML(carObjArray);

    this.stringHTMLToDOM(winnerHTML);
  }
}

// TODO: 함수 단위 기능별로 쪼개기.
// TODO: _carNames의 반복... > constructor로 올려버리기.
// 출력 class 나누기.
