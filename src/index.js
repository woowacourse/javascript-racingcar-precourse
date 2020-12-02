import Car from './car.js';

export default class RacingCarGame {
  constructor() {
    this.carsArray = [];
  }

  getPlayingCarList(carNameListArray) {
    for (const carName of carNameListArray) {
      this.carsArray.push(new Car(carName));
    }
  }

  gamePlay(times) {
    for (let i = 0; i < times; i++) {
      this.carsArray.forEach((car) => car.plusLength());
      this.showOnGameProgress();
    }
  }

  showOnGameProgress() {
    this.createResultList();
  }

  createResultList() {
    const $resultUl = document.body.querySelector('#result-list');
    const $resultLi = document.createElement('li');
    for (const car of this.carsArray) {
      $resultLi.appendChild(this.createResultText(car));
    }

    $resultLi.style.marginBottom = '30px';
    $resultUl.appendChild($resultLi);
  }

  createResultText(car) {
    const $resultText = document.createElement('div');
    $resultText.textContent += `
    ${car.name}: ${car.length}
    `;

    return $resultText;
  }

  pickWinner() {
    const maxLength = this.findMaxLengthCar();
    const winner = this.carsArray.filter(
      (car) => car.length.length === maxLength,
    );

    return winner;
  }

  findMaxLengthCar() {
    const lengthArray = [];
    this.carsArray.forEach((car) => lengthArray.push(car.length.length));

    return Math.max(...lengthArray);
  }
}
