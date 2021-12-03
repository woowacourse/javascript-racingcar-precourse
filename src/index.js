import RacingCarGame from './RacingCarGame.js';

class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
  }
  move() {
    this.step += this.randomMove();
  }
  randomMove() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      return 1;
    }
    return 0;
  }
}

export default Car;

new RacingCarGame();
