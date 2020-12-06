export const racingResult = cars => {
  if (cars.length === 1) {
    return racingResultContainer(`<div>최종 우승자: ${cars[0].name}</div>`);
  }

  return racingResultContainer(`<div>최종 우승자: ${winners(cars)}</div>`);
};

const racingResultContainer = children => {
  return `<div class="result">${children}</div>`;
};

const winners = cars => {
  let result = cars
    .map((car, idx) => {
      if (idx === cars.length - 1) {
        return car.name;
      }

      return `${car.name}, `;
    })
    .join('');

  return result;
};
