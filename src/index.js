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
    this.printRacingCarGameResult = document.createElement('div');
    document.body.appendChild(this.printRacingCarGameResult);
    this.printWinner = document.createElement('div');
    document.body.appendChild(this.printWinner);
    this.makeHiddenCountAndResultSection();
  }

  makeHiddenCountAndResultSection() {
    this.titleTag[0].style.visibility = 'hidden';
    this.formTag[1].style.visibility = 'hidden';
    this.titleTag[1].style.visibility = 'hidden';
    this.printRacingCarGameResult.style.visibility = 'hidden';
    this.printWinner.style.visibility = 'hidden';
  }

  makeVisibleCountSection() {
    document.getElementById('racing-count-input').value = '';
    this.titleTag[0].style.visibility = 'visible';
    this.formTag[1].style.visibility = 'visible';
    this.titleTag[1].style.visibility = 'hidden';
    this.printRacingCarGameResult.style.visibility = 'hidden';
    this.printWinner.style.visibility = 'hidden';
  }

  makeVisibleResultSection() {
    this.titleTag[1].style.visibility = 'visible';
    this.printRacingCarGameResult.style.visibility = 'visible';
    this.printWinner.style.visibility = 'visible';
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
      this.makeVisibleCountSection();
    } else {
      this.startRacingCarGame();
    }
  }

  startRacingCarGame() {
    const car = this.carName.map((name) => new Car(name));
    let i;
    this.printRacingCarGameResult.innerHTML = '';
    for (i = 0; i < this.inputCount; i += 1) {
      this.moveCar(car);
    }
    const winner = this.constructor.findWinner(car);
    this.printResult(winner);
  }

  moveCar(car) {
    car.forEach((eachCar) => {
      eachCar.isMove();
      this.printRacingCarGameResult.innerHTML += `${eachCar.printCurrentMovement()}<br />`;
    });
    this.printRacingCarGameResult.innerHTML += '<br />';
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
    this.makeVisibleResultSection();
    this.printWinner.innerHTML = `최종우승자: <span id="racing-winners">${winner}</span>`;
  }
}

const player = new RacingCarGame();
