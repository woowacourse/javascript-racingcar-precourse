import {showGameResult, printWinner} from '../utils/setResult.js';
import {showResultText} from '../utils/showDOM.js';

export default class PlayGame {
  constructor(carsArr, playCount) {
    this.carsArr = carsArr;
    this.playCount = playCount;
    this.startGame();
  }

  isMoveCar() {
    // eslint-disable-next-line no-undef
    const random = MissionUtils.Random.pickNumberInRange(0, 9);

    return random >= 4;
  }

  startGame() {
    showResultText();

    for (let i = 0; i < this.playCount; i += 1) {
      // racing term 
      this.carsArr.forEach(car => {
        if (this.isMoveCar()) {
          car.move();
        }
      });
      showGameResult(this.carsArr);
    }

    printWinner(this.carsArr);
  }
}
