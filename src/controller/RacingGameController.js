import { isCarNamesInputValid, isCountInputValid } from '../utils/validity.js';

class RacingGameController {
  constructor(model, view) {
    this.RacingGameView = view;
    this.RacingGameModel = model;
  }

  triggerEvent() {
    this.RacingGameView.setOnCountSubmit(this.onCountSubmit.bind(this));
    this.RacingGameView.setOnCarNamesSubmit(this.onCarNamesSubmit.bind(this));
  }

  onCarNamesSubmit(carNames) {
    const carNamesArray = this.RacingGameModel.parseCarNamesToArray(carNames);
    if (!isCarNamesInputValid(carNamesArray)) {
      return;
    }
    this.RacingGameView.showCountDOM();
  }

  onCountSubmit(racingCount) {
    if (!isCountInputValid(racingCount)) {
      return;
    }
    this.RacingGameModel.startCars(racingCount);

    const roundResult = this.RacingGameModel.makeRoundResult();
    const winner = this.RacingGameModel.makeWinner();

    this.RacingGameView.showRoundResult(roundResult);
    this.RacingGameView.showWinner(winner);
    this.RacingGameView.showResultDOM();
  }
}

export default RacingGameController;
