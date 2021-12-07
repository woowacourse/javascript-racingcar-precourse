class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
    this.stepByRound = [];
  }
  move(racingCount) {
    for (let i = 0; i < racingCount; i++) {
      this.step += this.randomMove();
      this.stepByRound.push(this.step);
    }
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
