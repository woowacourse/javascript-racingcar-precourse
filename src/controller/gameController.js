import { $carNamesInput, $carNamesSubmitBtn, $racingCountInput, $racingCountSubmitBtn } from '../data/domElement.js';
import { getNotValidMessage } from './getNotValidMessage.js';
import { showAlert } from '../utils/showAlert.js';
import RacingCarGame from '../model/racingCarGame.js';
import Car from '../model/car.js';
import RacingGameView from '../view/RacingGameView.js';

export default class GameController {
  constructor() {
    this.racingCarGame = new RacingCarGame();
    this.gameView = new RacingGameView();
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
    this.racingCarGame.play();
    this.gameView.setGameResult(this.racingCarGame.gameResult);
    this.gameView.renderRoundScroe();
  }
}
