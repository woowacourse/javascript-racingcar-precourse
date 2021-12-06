import { GAME } from '../utils/constant.js';
import { cars } from '../init/cars.js';

const { MIN_RANGE, MAX_RANGE, MOVING_RANGE } = GAME;

function getRandomNumber() {
  // eslint-disable-next-line no-undef
  return MissionUtils.Random.pickNumberInRange(MIN_RANGE, MAX_RANGE);
}

function getRacingResult(car) {
  if (getRandomNumber() >= MOVING_RANGE) {
    car.count++;
  }
}

export default function increaseWinnerCount() {
  cars.forEach((car) => getRacingResult(car));
}
