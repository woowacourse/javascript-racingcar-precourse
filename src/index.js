import CarName from './CarName.js';
import Car from './Car.js';

export default class RacingCarGame {
  constructor() {
    this.submitCarNames();
  }

  submitCarNames() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      const carNames = new CarName();
      let carObjArray = [];

      if (carNames.names != null) {
        this.showCountRacing();
        carObjArray = this.setCar(carNames.names);
        //시도 횟수 받기
      }
      console.log(carObjArray);
    });
  }

  showCountRacing() {
    const countContainer = document.querySelector('#count-container');

    countContainer.style.display = 'block';
  }

  setCar(_carNames) {
    // Car 객체에 이름별로 담아 배열로 다시 리턴
    const carObjArray = _carNames.map((name) => new Car(name));

    return carObjArray;
  }
}

new RacingCarGame();
