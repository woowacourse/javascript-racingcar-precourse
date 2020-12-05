import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';
import RandomNumber from './RandomNumber.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();

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
    let countNumber = 0;

    racingCountSubmit.addEventListener(
      'click',
      () => {
        countNumber = this.getCountNumber();
        this.repeatRunRacing(countNumber, _carNames);
      },
      { once: true }
    );
  }

  getCountNumber() {
    const racingCountInput = document.querySelector('#racing-count-input');

    return racingCountInput.value;
  }

  repeatRunRacing(_countNumber, _carNames) {
    const carObjArray = this.setCar(_carNames);

    if (this.exceptionHandler.isCountNumber(_countNumber)) {
      for (let i = 0; i < _countNumber; i++) {
        this.runRacing(carObjArray);
      }
    } else {
      alert('알맞은 숫자를 입력해 주세요');
    }
    console.log(carObjArray); // TODO: 결과 출력
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }

  runRacing(carObjArray) {
    carObjArray.forEach((car) => {
      const randomNumber = new RandomNumber();
      const goSign = randomNumber.init();

      if (goSign) {
        car.position++;
      }

      console.log(this.htmlString(car));
    });
  }

  htmlString(car) {
    const distance = '-';
    let totalDistance = '';

    if (car.position > 0) {
      for (let i = 0; i < car.position; i++) {
        totalDistance += distance;
      }
    }

    return `${car.name}: ${totalDistance}`;
  }
}
