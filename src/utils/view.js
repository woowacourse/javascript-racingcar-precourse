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
