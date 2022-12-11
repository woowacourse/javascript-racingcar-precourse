const View = require('./View');
const RacingGame = require('./Model/RacingGame');

class App {
  #racingGame;

  constructor() {
    this.view = new View();
    this.#racingGame = new RacingGame();
  }

  play() {
    this.readCarName();
  }

  readCarName() {
    this.view.readCarName((input) => {
      this.inputCheckHandler(
        () => this.#racingGame.setCarNames(input),
        this.readCarName.bind(this),
      );
      this.readCount();
    });
  }

  readCount() {
    this.view.readCount((input) => {
      this.inputCheckHandler(
        () => this.#racingGame.setCount(input),
        this.readCount.bind(this),
      );
      const result = this.#racingGame.makeCar().racing().checkWinner().getResult();
      this.view.printResult(result);
      this.view.close();
    });
  }

  inputCheckHandler(tryHandler, again) {
    try {
      tryHandler();
    } catch (err) {
      this.view.printError(err.message);
      again();
    }
  }
}

const app = new App();
app.play();

module.exports = App;
