function Car(name) {
  this.name = name;
}

export default function makeNewCars(carNamesArray) {
  const carList = carNamesArray.map((name) => new Car(name));

  return carList;
}
