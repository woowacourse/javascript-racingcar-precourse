import CarNameForm from './form/CarNameForm.js';
import RacingCountForm from './form/RacingCountForm.js';
import ResultForm from './form/ResultForm.js';

export default class Game {
  constructor() {
    this.cars = [];
    this.winner = [];
    this.racingCount = 0;
    this.carNameForm = new CarNameForm();
    this.racingCountForm = new RacingCountForm();
    this.resultForm = new ResultForm();
  }

  initialize() {
    this.racingCountForm.hide();
    this.resultForm.hide();
    this.getCarNames();
  }

  getCarNames() {
    this.carNameForm.$submit.addEventListener('click', e => {
      e.preventDefault();
      if (this.carNameForm.getValidation()) {
        this.cars = [...this.carNameForm.setCarName()];
        this.racingCountForm.show();
        this.getRacingInput();
      }
    });
  }

  getRacingInput() {
    this.racingCountForm.$submit.addEventListener('click', e => {
      e.preventDefault();
      const validRacingInput = this.racingCountForm.getValidation();
      if (validRacingInput) {
        this.racingCount = validRacingInput;
        this.printRacingResult();
      }
    });
  }

  printRacingResult() {
    let result = '';
    for (let i = 0; i < this.racingCount; i++) {
      result += this.setRacingResult();
    }

    result = `<div id="racing-result">${result}</div>`;
    this.setWinner();
    result += `<div id="racing-final-winner">최종 우승자: <span id="racing-winners">${this.winner.join(
      ',',
    )}</span></div>`;
    this.resultForm.show(result);
  }

  setRacingResult() {
    let raceResult = '';
    this.cars.forEach(car => {
      car.doRacing();
      raceResult += `<div>${car.name}: ${car.move}</div>`;
    });
    raceResult += '</br>';
    return raceResult;
  }

  setWinner() {
    let maxMove = 0;
    this.cars.forEach(car => {
      if (car.getDestination() > maxMove) maxMove = car.getDestination();
    });
    this.cars.forEach(car => {
      if (car.getDestination() === maxMove) this.winner.push(car.name);
    });
  }
}
