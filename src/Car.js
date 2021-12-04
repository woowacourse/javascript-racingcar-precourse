class Car {
  constructor(name) {
    this.name = name;
    this.advance = 0;
  }

  advanceCar() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.advance += 1;
  }
}

export default Car;
