import CarName from './CarName.js';
import Car from './Car.js';

export default class RacingCarGame {
  constructor() {
    this.carNames = [];
    this.submitCarNames();
  }

  submitCarNames() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      this.carNames = new CarName();
      if (this.carNames.names != null) {
        this.showCountRacing();
        this.runRacing(this.carNames.names);
      }
    });
  }

  showCountRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }

  runRacing(_carNames) {
    const racingCountSubmit = document.querySelector('#racing-count-submit');
    let countNumber = 0;

    racingCountSubmit.addEventListener('click', () => {
      countNumber = this.getCountNumber();

      this.repeatRunRacing(countNumber, _carNames);
    });
  }

  getCountNumber() {
    const racingCountInput = document.querySelector('#racing-count-input');

    return racingCountInput.value;
  }

  repeatRunRacing(_countNumber, _carNames) {
    const carObjArray = this.setCar(_carNames);

    if (_countNumber > 0) {
      for (let i = 0; i < _countNumber; i++) {
        /*
         * 생성한 Car 객체 여러번 반복하여 실행시키기
         * or
         * 숫자를 그대로 넣어서 Car객체 안에서 돌리기(Car(_name, _count))
         */
        console.log(carObjArray);
      }
    }
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }
}

new RacingCarGame();
