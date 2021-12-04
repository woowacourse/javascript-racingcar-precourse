import { convertHashMapToArray } from './general.js';

const printBars = distance => {
  let bars = '';
  for (let i = 0; i < distance; i += 1) {
    bars += '-';
  }
  return bars;
};

const printOneRound = carNameDistanceMap =>
  `${convertHashMapToArray(carNameDistanceMap)
    .map(([name, distance]) => `${name}: ${printBars(distance)}`)
    .join('<br/>')} <br/>`;

export const printCarGameResult = gameResult =>
  `${gameResult.map(printOneRound).join('<br/>')} <br/> 최종 우승자:`;

export const getMovingCarsResult = cars => {
  const carNameDistanceMap = new Map();
  cars.forEach(car => {
    car.goForward();
    const { name, distance } = car.getCarInformaiton();
    carNameDistanceMap.set(name, distance);
  });
  return carNameDistanceMap;
};

export const getFinalResult = gameResult =>
  convertHashMapToArray(gameResult[gameResult.length - 1]);

export const getMaximumDistance = finalResult =>
  finalResult.sort((a, b) => b[1] - a[1])[0][1];

export const canMoveCar = () =>
  MissionUtils.Random.pickNumberInRange(0, 9) >= 4;
