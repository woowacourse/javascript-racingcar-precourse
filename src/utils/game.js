export const printBars = distance => {
  let bars = '';
  for (let i = 0; i < distance; i += 1) {
    bars += '-';
  }
  return bars;
};

export const printCarResult = carNameDistanceMap => {
  let result = '';
  for (const [name, distance] of carNameDistanceMap.entries()) {
    result += `${name}: ${printBars(distance)} <br/>`;
  }
  return result;
};
