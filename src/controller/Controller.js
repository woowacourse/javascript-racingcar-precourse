import { CAUTION_MESSAGE, DOM } from '../utils/constant.js';
import CarNamesEvent from './CarNamesEvent.js';
import RacingCountEvent from './RacingCountEvent.js';
import Game from '../model/Game.js';
import ResultRacing from './RacingResult.js';
import Render from '../view/Render.js';

export default class Controller {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent();
    this.render = new Render();

    this.$racingCountSubmit = DOM.$RACING_COUNT_SUBMIT;
    this.$racingCountInput = DOM.$RACING_COUNT_INPUT;
    this.$carNamesSubmit = DOM.$CAR_NAMES_SUBMIT;
    this.$racingResultTitle = DOM.$RACING_RESULT_TITLE;
    this.$app = DOM.$APP;

    this.carNames = [];
    this.racingCount = 0;

    this.main();
  }

  readyGame = () => {
    this.racingCount = this.racingCountEvent.getInput();

    const game = new Game(this.racingCount, this.carNames);
    game.start();
    new ResultRacing(game);
  };

  isCarNamesSubmit = () => {
    if (this.carNames.length === 0) {
      this.racingCountEvent.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES_SUBMIT);

      return false;
    }

    return true;
  };

  isValidateCount = () => {
    if (!this.racingCountEvent.validateCount()) {
      this.racingCountEvent.alertErrorMessage();

      return false;
    }

    return true;
  };

  racingCountSubmit = () => {
    if (!this.isCarNamesSubmit()) {
      return;
    }

    if (!this.isValidateCount()) {
      return;
    }

    this.readyGame();
  };

  carNamesSubmit = () => {
    if (!this.carNamesEvent.validateNames()) {
      this.carNamesEvent.alertMessage();
    }

    this.carNames = this.carNamesEvent.getInput();
  };

  onClickSubmitButton = () => {
    this.$app.addEventListener('click', (event) => {
      event.preventDefault();
      if (event.target === this.$carNamesSubmit) {
        this.carNamesSubmit();
      }

      if (event.target === this.$racingCountSubmit) {
        this.racingCountSubmit();
      }
    });
  };

  racingCountInputFocus = () => {
    this.$racingCountInput.addEventListener('focus', () => {
      if (this.racingCountEvent.isCarNamesBlank()) {
        this.racingCountEvent.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES);
      }
    });
  };

  resultTitleHidden = () => {
    this.render.hidden(this.$racingResultTitle);
  };

  main = () => {
    this.resultTitleHidden();
    this.onClickSubmitButton();
    this.racingCountInputFocus();
  };
}
