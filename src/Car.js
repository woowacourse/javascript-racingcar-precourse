class Car {
  constructor(name) {
    this.name = name;
    this.step = 0;
    this.stepByRound = [];
  }
  move(RacingCount) {
    for (let i = 0; i < RacingCount; i++) {
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
