import { GO_AHEAD_MAX_VALUE } from '/src/lib/variables/constantNumbers.js';
import Car from '/src/lib/classes/car.js';
import Inputs from '/src/lib/classes/inputControl.js';
import addIdsToNodes from '/src/lib/config/addIdsToNodes.js';
import {
  hideUnusedContainers,
  showContainer,
  disableInputs,
} from '/src/lib/config/controlGetRacingCount.js';

const getInitCarInfo = carNames => carNames.reduce((acc, carName) => {
  acc.push(new Car(carName));
  return acc;
}, []);

export default class RacingCarGame {
  constructor(carNames) {
		this.cars = getInitCarInfo(carNames);
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
  let game = new RacingCarGame(carNames);

}

const submitRacingCountInput = ($racingCountInput, $racingCountSubmit, carNames) => {
  const _inputResult = new Inputs($racingCountInput.value);
  $racingCountInput.focus();
  console.log(_inputResult);
  console.log(_inputResult.getRacingCountNumber());

  disableInputs($racingCountInput, $racingCountSubmit);

  console.log(carNames);
}

const userInputRacingCount = carNames => {
  const $racingCountInput = document.getElementById('racing-count-input');
  const $racingCountSubmit = document.getElementById('racing-count-submit');
  $racingCountSubmit.addEventListener('click', () => submitRacingCountInput($racingCountInput, $racingCountInput, carNames));
}

const submitCarNamesInput = carNames => {
  const $racingCountContainer = document.getElementById('racing-count-container');
  showContainer($racingCountContainer);
  console.log(carNames);
  userInputRacingCount(carNames);
}

const userInputCarNames = () => {
  const $carNamesInput = document.getElementById('car-names-input');
  const $carNamesSubmit = document.getElementById('car-names-submit');

  $carNamesSubmit.addEventListener('click', () => {
    const carNamesInputData = new Inputs($carNamesInput.value);
    const {
      goToNextStep,
      message,
      inputData
    } = carNamesInputData.getResultOfCarNamesInput($carNamesInput);
    
    if(goToNextStep) {
      disableInputs($carNamesInput, $carNamesSubmit);
      return submitCarNamesInput(inputData);
    }

    $carNamesInput.value = '';
    alert(message);
  });
}

const startGame = () => {
  addIdsToNodes();
  hideUnusedContainers();
  userInputCarNames();
}

startGame();