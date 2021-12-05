import { CAUTION_MESSAGE, DOM } from '../utils/constant.js';
import CarNamesEvent from './CarNamesEvent.js';
import RacingCountEvent from './RacingCountEvent.js';
import Game from '../model/Game.js';
import Render from '../view/Render.js';
import Winners from '../model/Winners.js';

export default class ConfigureRacingCar {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent();
    this.render = new Render();
    this.$racingCountSubmit = DOM.$RACING_COUNT_SUBMIT;
    this.$racingCountInput = DOM.$RACING_COUNT_INPUT;
    this.$carNamesSubmit = DOM.$CAR_NAMES_SUBMIT;
    this.$app = DOM.$APP;
    this.$div = DOM.$DIV;
    this.$span = DOM.$SPAN;
    this.game = null;
    this.carNames = [];
    this.resultInformations = [];
    this.resultWinners = [];
    this.racingCount = 0;
    this.resultTemplate = '';
    this.resultWinnersTemplate = '';
    this.main();
  }

  racingCountInputFocus = () => {
    this.$racingCountInput.addEventListener('focus', () => {
      if (this.racingCountEvent.isCarNamesBlank()) {
        this.racingCountEvent.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES);
      }
    });
  };

  renderResultTemplate = () => this.render.template(this.$div, this.$app, this.resultTemplate);

  renderWinnersTemplate = () => this.render.template(this.$span, this.$app, this.resultWinnersTemplate);

  getRacingResult = () => {
    this.resultTemplate = this.game.getResultTemplate();
    this.resultInformations = this.game.getResultInformations();
  };

  readyGame = () => {
    this.racingCount = this.racingCountEvent.getInput();

    this.game = new Game(this.racingCount, this.carNames);
    this.game.start();
    this.getRacingResult();
    this.renderResultTemplate();

    const winners = new Winners(this.resultInformations);
    this.resultWinners = winners.getWinners();
    this.resultWinnersTemplate = winners.getWinnersTemplate();
    this.renderWinnersTemplate();
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

  main = () => {
    this.onClickSubmitButton();
    this.racingCountInputFocus();
  };
}
