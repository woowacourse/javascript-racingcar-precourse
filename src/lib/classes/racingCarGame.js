import { GO_AHEAD_MAX_VALUE } from '/src/lib/variables/constantNumbers.js';
import UserInputs from '/src/lib/classes/getUserInputs.js';
import addIdsToNodes from '/src/lib/config/addIdsToNodes.js';
import {
  hideUnusedContainers,
} from '/src/lib/config/manipulateContainers.js';

export default class RacingCarGame {
  constructor() {
    this.carNames = [];
    this.racingCount = null;
  }

  _createRandomNumber() {
    return Math.floor(Math.random()*(GO_AHEAD_MAX_VALUE+1));
  }

  _moveCars(curTurn) {
    //cars를 순회하면서 숫자랑 현재 턴 집어넣는다.
    //example -> cars._runOrPause(생성한 렌덤 숫자, 현재 turn숫자)
  }

  _getResult() {
    //게임이 종료된 후 결과 반환

  }
  
  play(totalRacingCountNumber) {
    //for문으로 턴을 쭉 돌면서 _moveCars 함수 실행
    
  }

  _inputGameData(carNames, racingCount) {
    this.carNames = carNames;
    this.racingCount = racingCount;
    console.log(startGame);
    console.log(this.carNames, this.racingCount);
  }

  _settingGame() {
    addIdsToNodes();
    hideUnusedContainers();
  }

  _getUserInputs() {
    let userInputs = new UserInputs(this._inputGameData);
    userInputs.userInputCarNames();
  }
}