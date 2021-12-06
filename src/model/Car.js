const getRandomNumber = () => {
  return MissionUtils.Random.pickNumberInRange(0, 9);
};
class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  getName() {
    return this.name;
  }

  getDistance() {
    return this.distance;
  }

  move() {
    if (getRandomNumber() >= 4) {
      this.distance += 1;
    }
  }
}

export default Car;
