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
    this.main();
  }

  racingCountInputFocus = () => {
    this.racingCountEvent.onFocusInput();
  };

  racingCountSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.racingCountEvent.checkCarNames();
      const isValidate = this.racingCountEvent.validateCount();

      if (!isValidate) {
        this.racingCountEvent.alertErrorMessage();
        this.$racingCountInput.focus();
        return;
      }

      const [racingCount, carNames] = this.racingCountEvent.getInputs();
      const game = new Game(racingCount, carNames);
      game.start();
    });
  };

  carNamesSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      if (!this.carNamesEvent.validateNames()) {
        this.carNamesEvent.alertMessage();
      }
    });
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCountSubmit();
    this.racingCountInputFocus();
  };
}

new RacingCar();
