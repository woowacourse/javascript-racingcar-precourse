export default class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  distanceIncrease = () => {
    this.distance += 1;
    console.log(this.name, this.distance);
  };
}
