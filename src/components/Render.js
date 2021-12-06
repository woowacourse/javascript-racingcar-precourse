import { Result } from '../elementClass/elementClass.js';

export default class Render {
  constructor() {
    this.result = new Result();
  }

  stepResult(stepResultList) {
    const carResult = document.createElement('p');

    for (let step of stepResultList) {
      carResult.innerHTML += `${step}<br>`;
    }
    this.result.div.appendChild(carResult);
  }

  getWinner(carList) {
    const stepList = carList.map(car => car.step);
    const maxStep = Math.max.apply(null, stepList);

    const winnerList = carList.filter(car => car.step === maxStep);
    const winnerNames = winnerList.map(winner => winner.name);
    this.winner(winnerNames);
  }

  winner(winnerNames) {
    const winner = document.createElement('span');
    winner.setAttribute('id', 'racing-winners');
    winner.innerHTML = '최종 우승자: ';

    const winnerName = winnerNames.join(', ');
    winner.innerHTML += winnerName;
    this.result.div.appendChild(winner);
  }
}
