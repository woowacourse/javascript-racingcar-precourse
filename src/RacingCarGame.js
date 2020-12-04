import Car from './Car.js';
import ExceptionHandler from './ExceptionHandler.js';

export default class RacingCarGame {
  exceptionHandler = new ExceptionHandler();

  constructor() {
    this.carNamesList = [];
    this.submitCarNames();
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

  // 처음 확인 버튼을 눌렀을 때
  submitCarNames() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      this.initRacingCar();
    });
  }

  initRacingCar() {
    this.carNamesList = this.getCarName();

    if (this.carNamesList !== null) {
      this.showCountRacing();
      this.submitRacingCount(this.carNamesList);
    }
  }

  showCountRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }

  submitRacingCount(_carNames) {
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
        /*
         * 생성한 Car 객체 여러번 반복하여 실행시키기
         * or
         * 숫자를 그대로 넣어서 Car객체 안에서 돌리기(Car(_name, _count))
         */
        console.log(carObjArray);
      }
    } else {
      alert('알맞은 숫자를 입력해 주세요');
    }
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }
}
