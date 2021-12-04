import { checkNameVaild, checkCountVaild } from '../model/UserInputChecker.js';
import RacingGame from '../model/RacingGame.js';
import UserFormDisplay from '../view/UserFormDisplay.js';
import GameResultDisplay from '../view/GameResultDisplay.js';

export default class GameController {
  constructor() {
    this.init();
    this.bindDefaultEvents();
  }

  init() {
    this.gameInstance = new RacingGame();
    UserFormDisplay.init();
    GameResultDisplay.init();
  }

  bindDefaultEvents() {
    UserFormDisplay.bindNamesSubmit(this.handleRacerNamesInput.bind(this));
    UserFormDisplay.bindCountSubmit(this.handleGameCountInput.bind(this));
  }

  handleRacerNamesInput(names) {
    const resultCode = checkNameVaild(names);
    if (UserFormDisplay.errorMessage(resultCode) === true) {
      return false;
    }

    this.gameInstance.setRacer(names);
    UserFormDisplay.open(resultCode);
  }

  handleGameCountInput(count) {
    const resultCode = checkCountVaild(count);
    if (UserFormDisplay.errorMessage(resultCode) === true) {
      return false;
    }

    this.gameInstance.setPlay(count);
    UserFormDisplay.open(resultCode);

    this.handelGameResult();
  }

  handelGameResult() {
    const { gameResult } = this.gameInstance;
    GameResultDisplay.draw(gameResult, ($restartButton) => {
      $restartButton.addEventListener('click', this.init.bind(this));
    });
  }
}
