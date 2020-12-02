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
    const $resultContainer = document.body.querySelector('#result-container');
    const $resultUl = document.createElement('ul');
    const $resultLi = document.createElement('li');
    for (const car of this.carsArray) {
      $resultLi.appendChild(this.createResultText(car));
    }

    $resultUl.style.padding = '0px';
    $resultUl.appendChild($resultLi);
    $resultContainer.appendChild($resultUl);
  }

  createResultText(car) {
    const $resultText = document.createElement('div');
    $resultText.textContent += `
    ${car.name}: ${car.length}
    `;

    return $resultText;
  }
}
