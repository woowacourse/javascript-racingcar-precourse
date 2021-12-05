class Car {
  constructor(name) {
    this.name = name;
  }
}

class RacingGame {
  constructor() {
    this.racingCars = [];
  }

  init() {
    this.initScreen();
  }

  initScreen() {
    const racingCountTitle = document.querySelectorAll('h4')[0];
    const racingCountForm = document.querySelectorAll('form')[1];
    const racingResult = document.querySelectorAll('h4')[1];

    racingCountTitle.style.visibility = 'hidden';
    racingCountForm.style.visibility = 'hidden';
    racingResult.style.visibility = 'hidden';
  }
}

const game = new RacingGame();

game.init();
