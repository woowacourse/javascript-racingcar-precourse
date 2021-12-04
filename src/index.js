import checkCarName from './checkCarName.js';
import Car from './Car.js';

export default class RacingCarGame {
  constructor() {
    document.getElementById('car-names-submit').onclick =
      this.onCarNameInputSubmit.bind(this);
    document.getElementById('racing-count-submit').onclick =
      this.onCountInputSubmit.bind(this);
    this.formTag = document.getElementsByTagName('form');
    this.titleTag = document.getElementsByTagName('h4');
    this.makeHiddenCountAndResultSection();
  }

  makeHiddenCountAndResultSection() {
    this.titleTag[0].style.visibility = 'hidden';
    this.formTag[1].style.visibility = 'hidden';
    this.titleTag[1].style.visibility = 'hidden';
  }

  makeVisibleCountSection() {
    document.getElementById('racing-count-input').value = '';
    this.titleTag[0].style.visibility = 'visible';
    this.formTag[1].style.visibility = 'visible';
  }

  onCarNameInputSubmit(e) {
    e.preventDefault();
    const inputCarNames = document.getElementById('car-names-input').value;
    this.carName = inputCarNames.split(',');
    if (!checkCarName(this.carName)) {
      alert('자동차 이름 입력이 올바르지 않습니다. 다시 입력해주세요.');
      this.makeHiddenCountAndResultSection();
    } else {
      this.makeVisibleCountSection();
    }
  }

  onCountInputSubmit(e) {
    e.preventDefault();
    const inputCountString =
      document.getElementById('racing-count-input').value;
    this.inputCount = Number(inputCountString);
    if (inputCountString.length === 0 || this.inputCount < 1) {
      alert(
        '시도할 횟수 입력이 올바르지 않습니다. 1 이상의 숫자로 입력해주세요.'
      );
    } else {
      this.startRacingCarGame();
    }
  }

  startRacingCarGame() {
    const car = this.carName.map((name) => new Car(name));
    let i;
    let racingCarGameResult = '';
    for (i = 0; i < this.inputCount; i += 1) {
      racingCarGameResult += this.moveCar(car);
    }
    let winner = this.findWinner(car);
  }

  static moveCar(car) {
    let currentGameResult = '';
    car.forEach((eachCar) => {
      eachCar.isMove();
      currentGameResult += `${eachCar.printCurrentMovement()}\n`;
    });
    currentGameResult += '\n';
    return currentGameResult;
  }

  static findWinner(car) {
    let winner = '';
    let winnerMove = 0;
    car.forEach((eachCar) => {
      const eachCarName = eachCar.name;
      const eachCarMove = eachCar.move;
      if (winner.length === 0 || winnerMove < eachCarMove) {
        winner = `${eachCarName}`;
        winnerMove = eachCarMove;
      } else if (winnerMove === eachCarMove) {
        winner += `, ${eachCarName}`;
      }
    });
    return winner;
  }
}

const player = new RacingCarGame();
