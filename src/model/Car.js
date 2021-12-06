class Car {
  constructor(name) {
    this.name = name;
    this.curDist = 0;
    this.sumDist = 0;
  }

  createRandomNumber() {
    this.curDist = window.MissionUtils.Random.pickNumberInRange(0, 9);
  }

  forwardOrNot() {
    if (this.curDist >= 4) {
      this.sumDist++;
    }
  }

  calcDist() {
    this.createRandomNumber();
    this.forwardOrNot();
  }

  distRender() {
    let temp = '';
    for (let i = 0; i < this.sumDist; i++) {
      temp += '-';
    }
    return temp;
  }

  get carName() {
    return this.name;
  }

  get dist() {
    return this.sumDist;
  }
}

export default Car;
