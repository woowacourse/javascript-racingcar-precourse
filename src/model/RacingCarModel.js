import Car from './Car.js';
import { CAR_NAMES_SEPARATER, MOVE_UNIT } from '../libs/constant.js';
import { strToArray } from '../utils/parse.js';

class RacingCarModel {
  racingCount;
  racingResult;
  carNamesArray;

  startCars(racingCount) {
    this.makeCars();
    this.moveCars(racingCount);
  }

  makeCars() {
    this.racingResult = {};
    console.log(`carNamesArray`, this.carNamesArray);
    for (let car of this.carNamesArray) {
      this.racingResult[car] = new Car(car);
    }
  }

  moveCars(racingCount) {
    this.racingCount = racingCount;
    for (let key in this.racingResult) {
      // 개수만큼 움직여주는 것을 모델이 할 일일까?
      this.racingResult[key].move(racingCount);
    }
  }

  makeWinner() {
    const maxStep = this.getMaxStep();
    let winner = '';
    for (let key in this.racingResult) {
      if (this.racingResult[key].step === maxStep) {
        winner += `, ${this.racingResult[key].name}`;
      }
    }
    return winner.slice(2);
  }

  getMaxStep() {
    const stepArray = this.getStepArray();
    return Math.max(...stepArray);
  }

  getStepArray() {
    const stepArray = [];
    for (let key in this.racingResult) {
      stepArray.push(this.racingResult[key].step);
    }
    return stepArray;
  }

  parseCarNamesToArray(carNames) {
    this.carNamesArray = strToArray(carNames, CAR_NAMES_SEPARATER);
  }

  makeRoundResult() {
    let resultText = '';
    for (let i = 0; i < this.racingCount; i++) {
      for (let key in this.racingResult) {
        resultText += `${key}: ${MOVE_UNIT.repeat(this.racingResult[key].stepByRound[i])}<br>`;
      }
      resultText += '<br>';
    }
    return resultText;
  }
}

export default RacingCarModel;
