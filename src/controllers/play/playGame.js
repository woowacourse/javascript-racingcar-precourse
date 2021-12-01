import { LIMIT_OF_RANDOM_NUMBER, MINIMUM_NUMBER_TO_ADVANCE } from "../../utils/constants.js";
import { showPlaying } from "../../views/racingResult/showPlaying.js";
import { getRandomNumber } from "./getRandomNumber.js";

export const playGame = (cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    cars.forEach(car => {
      const { min, max } = LIMIT_OF_RANDOM_NUMBER;
      const ranNum = getRandomNumber(min, max);

      if (ranNum >= MINIMUM_NUMBER_TO_ADVANCE) {
        car.location++;
      }
    });

    showPlaying(cars);
  }

  return cars;
};
