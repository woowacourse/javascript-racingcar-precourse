import GameModel from '../model/gameModel.js';
import GameView from '../view/gameView.js';
import { showError } from '../utils/error.js';
import { createResultText, createTotalRoundText } from './createText.js';

export default class GameController {
  constructor() {
    this.gameModel = new GameModel();
    this.gameView = new GameView();

    this.setBinds();
    this.addEvents();
  }

  setBinds() {
    this.handleCarNames = this.handleCarNames.bind(this);
    this.handleRacingCount = this.handleRacingCount.bind(this);
  }

  addEvents() {
    this.gameView.$carNamesForm.addEventListener('submit', this.handleCarNames);
    this.gameView.$racingCountForm.addEventListener('submit', this.handleRacingCount);
  }

  handleCarNames(e) {
    e.preventDefault();

    try {
      this.gameModel.saveCars(this.gameView.$carNamesInput.value);
    } catch (err) {
      this.gameView.resetCarNamesInput();

      return showError(err);
    }

    // this.gameView.makeReadOnly(this.gameView.$carNamesInput);
    this.gameView.show(this.gameView.$racingCountTitle);
    this.gameView.show(this.gameView.$racingCountForm);
  }

  handleRacingCount(e) {
    e.preventDefault();

    try {
      this.gameModel.saveRacingCount(this.gameView.$racingCountInput.value);
    } catch (err) {
      this.gameView.resetRacingCountInput();
      return showError(err);
    }

    this.gameView.resetRacingResult();
    // this.gameView.makeReadOnly(this.gameView.$racingCountInput);
    this.gameView.show(this.gameView.$racingResultTitle);
    this.play();
  }

  play() {
    const totalRoundText = createTotalRoundText(this.gameModel.racingCount, this.gameModel.cars);

    this.gameModel.setWinners(this.gameModel.cars);

    const resultText = createResultText(this.gameModel.winners);

    this.gameView.renderTotalRound(totalRoundText);
    this.gameView.renderResult(resultText);
  }
}
