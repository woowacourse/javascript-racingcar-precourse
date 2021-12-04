export const printBars = distance => {
  let bars = '';
  for (let i = 0; i < distance; i += 1) {
    bars += '-';
  }
  return bars;
};

const printOneRound = carNameDistanceMap => {
  let result = '';
  for (const [name, distance] of carNameDistanceMap.entries()) {
    result += `${name}: ${printBars(distance)} <br/>`;
  }
  return result;
};

export const printCarGameResult = gameResult =>
  `${gameResult.map(printOneRound).join('<br/>')} <br/> 최종 우승자:`;
