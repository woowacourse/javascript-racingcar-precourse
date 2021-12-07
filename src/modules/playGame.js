
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
    for(let i = 0; i < this.playCount; i++) {
      //racing term 
      this.carsArr.forEach(car => {
        this.isMoveCar() ? car.move() : false;
      });
      this.carsArr.forEach((car, index) => console.log("car" + index + " : ", car.distance))
    }
  }
}