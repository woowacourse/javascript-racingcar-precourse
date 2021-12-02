import {
  LIMIT_OF_RANDOM_NUMBER,
  MINIMUM_NUMBER_TO_ADVANCE,
} from "../../utils/constants.js";
import { getRandomNumber } from "./getRandomNumber.js";

import { showPlaying } from "../../views/racingResult/showPlaying.js";

const playRound = cars => {
  cars.forEach(car => {
    const { min, max } = LIMIT_OF_RANDOM_NUMBER;
    const ranNum = getRandomNumber(min, max);

    if (ranNum >= MINIMUM_NUMBER_TO_ADVANCE) {
      car.goForward();
    }
  });

  return cars;
};

const playGame = (cars, racingCount) => {
  for (let i = 0; i < racingCount; i++) {
    playRound(cars);
    showPlaying(cars);
  }

  return cars;
};

export { playGame };
