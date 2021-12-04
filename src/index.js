import { DOM } from './constant/constant.js';
import CarNamesEvent from './events/CarNamesEvent.js';
import RacingCountEvent from './events/RacingCountEvent.js';
import Game from './Game/Game.js';

class RacingCar {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent(this.carNamesEvent);
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.$racingCountInput = DOM.racingCountInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
    this.carNames = [];
    this.racingCount = 0;
    this.main();
  }

  racingCountInputFocus = () => {
    this.racingCountEvent.onFocusInput();
  };

  readyGame = () => {
    this.racingCount = this.racingCountEvent.getInput();
    const game = new Game(this.racingCount, this.carNames);
    game.start();
  };

  racingCountSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      const isValidate = this.racingCountEvent.validateCount();

      if (!isValidate) {
        this.racingCountEvent.alertErrorMessage();
        this.$racingCountInput.focus();
        return;
      }

      this.readyGame();
    });
  };

  carNamesSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (!this.carNamesEvent.validateNames()) {
        this.carNamesEvent.alertMessage();
      }

      this.carNames = this.carNamesEvent.getInput();
    });
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCountSubmit();
    this.racingCountInputFocus();
  };
}

new RacingCar();
