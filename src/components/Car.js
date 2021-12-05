class Car {
  constructor(name) {
    this.$name = name;
    this.$advance = 0;
  }

  advance() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) this.$advance += 1;
  }

  printAdvance() {
    return `${this.$name}: ${this.changeAdvanceToDash()}`;
  }

  resetAdvance() {
    this.$advance = 0;
  }

  changeAdvanceToDash() {
    return '-'.repeat(this.$advance);
  }
}

export default Car;
