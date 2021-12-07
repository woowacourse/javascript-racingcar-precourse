import Car from '../Car.js';
import { CAR_NAMES_SEPARATER, MOVE_UNIT } from '../libs/constant.js';
import { strToArray } from '../utils/parse.js';

class RacingCarModel {
  RacingCount;
  RacingResult;
  carNamesArray;

  startCars(RacingCount) {
    this.makeCars();
    this.moveCars(RacingCount);
  }

  makeCars() {
    this.RacingResult = {};
    console.log(`carNamesArray`, this.carNamesArray);
    for (let car of this.carNamesArray) {
      this.RacingResult[car] = new Car(car);
    }
  }

  moveCars(RacingCount) {
    this.RacingCount = RacingCount;
    for (let key in this.RacingResult) {
      // 개수만큼 움직여주는 것을 모델이 할 일일까?
      this.RacingResult[key].move(RacingCount);
    }
  }

  makeWinner() {
    const maxStep = this.getMaxStep();
    let winner = '';
    for (let key in this.RacingResult) {
      if (this.RacingResult[key].step === maxStep) {
        winner += `, ${this.RacingResult[key].name}`;
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
    for (let key in this.RacingResult) {
      stepArray.push(this.RacingResult[key].step);
    }
    return stepArray;
  }

  parseCarNamesToArray(carNames) {
    this.carNamesArray = strToArray(carNames, CAR_NAMES_SEPARATER);
  }

  makeRoundResult() {
    let resultText = '';
    for (let i = 0; i < this.RacingCount; i++) {
      for (let key in this.RacingResult) {
        resultText += `${key}: ${MOVE_UNIT.repeat(this.RacingResult[key].stepByRound[i])}<br>`;
      }
      resultText += '<br>';
    }
    return resultText;
  }
}

export default RacingCarModel;
