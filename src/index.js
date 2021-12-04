import { $carNamesInput, $carNamesSubmitBtn, $racingCountInput, $racingCountSubmitBtn } from './domElement.js';
import { showAlert } from './utils/showAlert.js';
import { getNotValidMessage } from './getNotValidMessage.js';
import RacingCarGame from './racingCarGame.js';
import Car from './car.js';

class GameController {
  constructor() {
    this.racingCarGame = new RacingCarGame();
    this.setEvent();
  }

  setEvent() {
    $carNamesSubmitBtn.addEventListener('click', this.handleSubmitCarNames.bind(this));
    $racingCountSubmitBtn.addEventListener('click', this.handleSubmitRacingCount.bind(this));
  }

  handleSubmitCarNames(e) {
    e.preventDefault();
    const carNames = $carNamesInput.value.split(',');
    const errorMessage = getNotValidMessage(carNames);

    if (errorMessage) {
      showAlert(errorMessage);
      return;
    }

    const cars = carNames.map(name => new Car(name));
    this.racingCarGame.setCars(cars);
  }

  handleSubmitRacingCount(e) {
    e.preventDefault();
    const racingCount = $racingCountInput.value;
    this.racingCarGame.setRacingCount(racingCount);
  }
}

new GameController();
