import { isCarNamesInputValid, isCountInputValid } from '../utils/validity.js';

class RacingCarController {
  constructor(model, view) {
    this.RacingCarView = view;
    this.RacingCarModel = model;
  }

  triggerEvent() {
    this.RacingCarView.setOnCountSubmit(this.onCountSubmit.bind(this));
    this.RacingCarView.setOnCarNamesSubmit(this.onCarNamesSubmit.bind(this));
  }

  onCarNamesSubmit(carNames) {
    const carNamesArray = this.RacingCarModel.parseCarNamesToArray(carNames);
    if (!isCarNamesInputValid(carNamesArray)) {
      return;
    }
    this.RacingCarView.showCountDOM();
  }

  onCountSubmit(racingCount) {
    if (!isCountInputValid(racingCount)) {
      return;
    }
    this.RacingCarModel.startCars(racingCount);

    const roundResult = this.RacingCarModel.makeRoundResult();
    const winner = this.RacingCarModel.makeWinner();

    this.RacingCarView.showRoundResult(roundResult);
    this.RacingCarView.showWinner(winner);
    this.RacingCarView.showResultDOM();
  }
}

export default RacingCarController;
