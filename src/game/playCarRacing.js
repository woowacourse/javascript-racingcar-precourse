import { GAME } from '../utils/constant.js';

function getRandomNumber() {
  // eslint-disable-next-line no-undef
  return MissionUtils.Random.pickNumberInRange(GAME.MIN_RANGE, GAME.MAX_RANGE);
}

function getRacingResult(car) {
  if (getRandomNumber() >= GAME.MOVING_RANGE) {
    car.count++;
  }
}

export default function playCarRacing(carObjectList) {
  carObjectList.forEach((car) => getRacingResult(car));
}
