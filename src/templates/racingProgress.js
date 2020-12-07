import { concatedDistance } from '../utils/index.js';

export const racingProgress = cars => {
  return racingProgressContainer(
    cars
      .map(car => `<div>${car.name}: ${concatedDistance(car.distance)}</div>`)
      .join('')
  );
};

const racingProgressContainer = children => {
  return `<div class="progress">${children}</div>`;
};
