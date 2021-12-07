import Car from './Car.js';
import checkCarName from './checkCarName.js';
import Layout from './Layout.js';

export default class RacingCarGame {
  constructor() {
    this.layout = new Layout();
    document.getElementById('car-names-submit').onclick =
      this.onCarNameInputSubmit.bind(this);
    document.getElementById('racing-count-submit').onclick =
      this.onCountInputSubmit.bind(this);
  }

  onCarNameInputSubmit(e) {
    e.preventDefault();
    const inputCarNames = Layout.inputCarName();
    this.carName = inputCarNames.split(',');
    if (!checkCarName(this.carName)) {
      alert('자동차 이름 입력이 올바르지 않습니다. 다시 입력해주세요.');
      this.layout.makeHiddenCountAndResultSection();
    } else {
      this.layout.makeVisibleCountSection();
    }
  }

  onCountInputSubmit(e) {
    e.preventDefault();
    const inputCountString = Layout.inputCountString();
    this.inputCount = Number(inputCountString);
    if (inputCountString.length === 0 || this.inputCount < 1) {
      alert(
        '시도할 횟수 입력이 올바르지 않습니다. 1 이상의 숫자로 입력해주세요.'
      );
      this.layout.makeVisibleCountSection();
    } else {
      this.startRacingCarGame();
    }
  }

  startRacingCarGame() {
    const car = this.carName.map((name) => new Car(name));
    let i;
    let moveResult = '';
    for (i = 0; i < this.inputCount; i += 1) {
      moveResult += this.constructor.moveCar(car);
    }
    this.layout.printMoveResult(moveResult);
    const winner = this.constructor.findWinner(car);
    this.printResult(winner);
  }

  static moveCar(car) {
    let moveResult = '';
    car.forEach((eachCar) => {
      eachCar.isMove();
      moveResult += `${eachCar.printCurrentMovement()}<br />`;
    });
    moveResult += '<br />';
    return moveResult;
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

  printResult(winner) {
    this.layout.makeVisibleResultSection();
    this.layout.printWinnerResult(winner);
  }
}

const player = new RacingCarGame();
