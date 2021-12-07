import { convertHashMapToArray } from './general.js';
import { RULE } from './constants.js';

export const moveCarAndGetDistances = cars => {
  const carNameDistanceMap = new Map();
  cars.forEach(car => {
    car.goForward();
    const { name, distance } = car.getCarInformaiton();
    carNameDistanceMap.set(name, distance);
  });
  return carNameDistanceMap;
};

const getFinalResult = gameResult =>
  convertHashMapToArray(gameResult[gameResult.length - 1]);

const getMaximumDistance = finalResult =>
  finalResult.sort((a, b) => b[1] - a[1])[0][1];

export const getWinners = gameResult => {
  const finalResult = getFinalResult(gameResult);
  const maximumDistance = getMaximumDistance(finalResult);
  return finalResult
    .filter(([, distance]) => distance === maximumDistance)
    .map(([name]) => name);
};

export const canMoveCar = () =>
  MissionUtils.Random.pickNumberInRange(0, 9) >= RULE.MOVE_CAR_REQUIREMENT;
