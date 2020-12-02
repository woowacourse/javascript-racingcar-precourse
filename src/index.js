import InputStatus from '/src/lib/inputControl.js';

import {
  getInitCarInfo,
} from '/src/lib/gameFunctions.js';



export default class RacingCarGame {
  constructor(carNames) {
		this.cars = getInitCarInfo(carNames);
  }

  _moveCars(curTurn) {
    //cars를 순회하면서 숫자랑 현재 턴 집어넣는다.
    //example -> car._runOrPause(생성한 렌덤 숫자, 현재 turn숫자)
  }

  _getResult() {
    //게임이 종료된 후 결과 반환

  }
  
  play(totalTurnNumber) {
    //for문으로 턴을 쭉 돌면서 _moveCars 함수 실행
    
  }
}

const runGame = carNames => {
  let game = new RacingCarGame(carNames);

}

const startGame = () => {
  //

  //input

}

startGame();