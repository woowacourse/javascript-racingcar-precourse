class Car {
  constructor(name) {
    this.name = name;
    this.forwardCount = 0;
  }

  moveForwardRandomly() {
    const randomValue = Math.floor(Math.random() * 10);

    if (randomValue >= 4) {
      this.forwardCount += 1;
    }
  }
}

export default Car;
