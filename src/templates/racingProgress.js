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
  let result = '';
  for (let i = 0; i < size; i++) {
    result += '-';
    i += 1;
  }

  return result;
};
