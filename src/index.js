import { GO_AHEAD_MAX_VALUE } from '/src/lib/variables/constantNumbers.js';
import InputsControl from '/src/lib/classes/inputControl.js';
import addIdsToNodes from '/src/lib/config/addIdsToNodes.js';
import {
  hideUnusedContainers,
  showContainer,
  disableInputs,
} from '/src/lib/config/manipulateContainers.js';

export default class RacingCarGame {
  constructor() {
		this.cars = [];
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
}

const runGame = (carNames, racingCount) => {
  let game = new RacingCarGame();

}

class UserInputs {
  constructor() {
    this.$carNamesInput = document.getElementById('car-names-input');
    this.$carNamesSubmit = document.getElementById('car-names-submit');
    this.$racingCountContainer = document.getElementById('racing-count-container');
    this.$racingCountInput = document.getElementById('racing-count-input');
    this.$racingCountSubmit = document.getElementById('racing-count-submit');
    this.carNames = [];
  }

  checkRacingCountInput(racingCountInputData) {
    const {
      goToNextStep,
      message,
      inputData
    } = racingCountInputData.getResultOfRacingCountNumber(this.$racingCountInput);
  
    if(goToNextStep) {
      disableInputs(this.$racingCountInput, this.$racingCountSubmit);
      return console.log('success!', this.carNames, inputData);
    }
  
    this.$racingCountInput.value = '';
    return alert(message);
  }

  userInputRacingCount() {
    this.$racingCountSubmit.addEventListener('click', () => this.checkRacingCountInput(
      new InputsControl(this.$racingCountInput.value),
    ));
  }

  submitCarNamesInput(carNames) {
    showContainer(this.$racingCountContainer);
    this.carNames = carNames;
    return this.userInputRacingCount();
  }

  checkCarNamesInput(carNamesInputData) {
    const {
      goToNextStep,
      message,
      inputData
    } = carNamesInputData.getResultOfCarNamesInput(this.$carNamesInput);
  
    if(goToNextStep) {
      disableInputs(this.$carNamesInput, this.$carNamesSubmit);
      return this.submitCarNamesInput(inputData);
    }
  
    this.$carNamesInput.value = '';
    return alert(message);
  }

  userInputCarNames() {  
    this.$carNamesSubmit.addEventListener('click', () => this.checkCarNamesInput(
      new InputsControl(this.$carNamesInput.value)
    ));
  }

}



const settingGame = () => {
  addIdsToNodes();
  hideUnusedContainers();
}

const startGame = () => {
  settingGame();
  
  let userInputs = new UserInputs();
  userInputs.userInputCarNames();
}

startGame();