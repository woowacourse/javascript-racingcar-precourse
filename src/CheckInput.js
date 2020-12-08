export default class CheckInput {
  constructor() {
  };

  checkCarNameLength(car) {
    return car.length <= 5 && car.length > 0;
  }

  checkNameDuplication(cars, car) {
    return cars.indexOf(car) === cars.lastIndexOf(car);
  }

  checkCarList(cars) {
    let validation = 1;

    if (cars.length <= 1) {
      return -1;
    }
    cars.forEach((car) => {
      if (this.checkCarNameLength(car) === false) {
        validation = -2;
      } else if (this.checkNameDuplication(cars, car) === false) {
        validation = -3;
      };
    });

    return validation;
  };

  checkCount(count) {
    if (count <= 0) {
      return -4;
    }
    return 1;
  }
};
