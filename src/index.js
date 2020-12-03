import { GO_AHEAD_MAX_VALUE } from '/src/lib/variables/constantNumbers.js';
import Car from '/src/lib/classes/car.js';
import Inputs from '/src/lib/classes/inputControl.js';
import addIdsToNodes from '/src/lib/config/addIdsToNodes.js';
import {
  hideRacingCountInputAndResult,
  showRacingCountInputAttribute,
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

const racingCountUserInput = carNames => {
  const $racingCountInput = document.getElementById('racing-count-input');
  const $racingCountSubmit = document.getElementById('racing-count-submit');

  $racingCountSubmit.addEventListener('click', () => {
    const _inputResult = new Inputs($racingCountInput.value);
    $racingCountInput.focus();
    console.log(_inputResult);
    console.log(_inputResult.getRacingCountNumber());

    //값이 올바르면 게임 시작하기
    console.log(carNames);
  });
}

const carNamesUserInput = () => {
  const $carNamesInput = document.getElementById('car-names-input');
  const $carNamesSubmit = document.getElementById('car-names-submit');

  $carNamesSubmit.addEventListener('click', () => {
    const _inputResult = new Inputs($carNamesInput.value);
    $carNamesInput.focus();
    //console.log(_inputResult);
    //console.log(_inputResult.getCarNames());

    //유효성이 맞으면 아래 노드 부활시키고 다음 순서(시도할 횟수)
    //유효성이 틀리면 입력 재시도
    //이미 입력 받았으면 경고 메시지 띄우거나 disable시키기
    showRacingCountInputAttribute();
    racingCountUserInput(_inputResult.getCarNames());
  });
}

const startGame = () => {
  addIdsToNodes();
  hideRacingCountInputAndResult();
  carNamesUserInput();
}

startGame();