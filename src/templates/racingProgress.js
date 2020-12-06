export const racingProgress = cars => {
  return racingProgressContainer(
    cars
      .map(car => `<div>${car.name}: ${distance(car.distance)}</div>`)
      .join('')
  );
};

const racingProgressContainer = children => {
  return `<div class="progress">${children}</div>`;
};

const distance = size => {
  let i = 0;
  let result = '';
  while (i < size) {
    result += '-';
    i += 1;
  }

  return result;
};
