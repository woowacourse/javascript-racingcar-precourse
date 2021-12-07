import { showGameResult, printWinner } from "./setResult.js";
import { showResultText } from "./showDOM.js";

export default class playGame {
  constructor(carsArr, playCount) {
    this.carsArr = carsArr;
    this.playCount = playCount;
    this.startGame();
  }

  isMoveCar() {
    const random = MissionUtils.Random.pickNumberInRange(0, 9);

    return random >= 4 ? true : false;
  }

  startGame() {
    showResultText();

    for(let i = 0; i < this.playCount; i++) {
      //racing term 
      this.carsArr.forEach(car => {
        this.isMoveCar() ? car.move() : false;
      });
      showGameResult(this.carsArr);
    }

    printWinner(this.carsArr);
  }
}