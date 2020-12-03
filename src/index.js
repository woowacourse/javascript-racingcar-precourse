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

const submitCarNamesInput = ($carNamesInput, $carNamesSubmit) => {
  const $racingCountContainer = document.getElementById('racing-count-container');
  const _inputCarNamesResult = new Inputs($carNamesInput.value);
  $carNamesInput.focus();

  if(_inputCarNamesResult.checkSpace()) {
    $carNamesInput.value = '';
    return alert('공백은 입력받을 수 없습니다.');
  }

  if(_inputCarNamesResult.checkMoreThanFiveChars()) {
    $carNamesInput.value = '';
    return alert('자동차 이름은 5글자를 넘으면 안됩니다.');
  }

  if(_inputCarNamesResult.checkSameNames()) {
    $carNamesInput.value = '';
    return alert('자동차 이름은 중복될 수 없습니다.');
  }


  disableInputs($carNamesInput, $carNamesSubmit);
  showContainer($racingCountContainer);
  userInputRacingCount(_inputCarNamesResult.getCarNames());
}

const userInputCarNames = () => {
  const $carNamesInput = document.getElementById('car-names-input');
  const $carNamesSubmit = document.getElementById('car-names-submit');

  $carNamesSubmit.addEventListener('click', () => submitCarNamesInput($carNamesInput, $carNamesSubmit));
}

const startGame = () => {
  addIdsToNodes();
  hideUnusedContainers();
  userInputCarNames();
}

startGame();