export default class AppContainer {
  constructor(app, racingCarGame) {
    this.racingCarGame = racingCarGame;
    app.onclick = this.onClick.bind(this);
  }

  showRacingCount() {
    if (this.racingCarGame.cars.length > 0) {
      document.getElementById('racing-count').hidden = false;
    }
  }

  submitCarNames(carNames) {
    this.racingCarGame.setCars(carNames);
    this.showRacingCount();
  }

  submitRacingCount(racingCount) {
    this.racingCarGame.setRacingCount(racingCount);
    this.racingCarGame.start();
  }

  onClick(event) {
    if (event.target.id === 'car-names-submit') {
      const carNames = document.getElementById('car-names-input').value;
      this.submitCarNames(carNames);
    }

    if (event.target.id === 'racing-count-submit') {
      const racingCount = document.getElementById('racing-count-input').value;
      this.submitRacingCount(racingCount);
    }
  }
}
