import { NUMBER as NUM } from "../constants/constants.js";
import { setDistanceWithRandomNumber } from "../utils/random.js";

export class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  race() {
    this.distance += setDistanceWithRandomNumber(
      NUM.RANDOM_START,
      NUM.RANDOM_END
    );
  }
}
