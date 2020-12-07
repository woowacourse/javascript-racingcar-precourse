export const concatedWinners = winners => {
  let result = winners
    .map((car, idx) => {
      if (idx === winners.length - 1) {
        return car.name;
      }

      return `${car.name}, `;
    })
    .join('');

  return result;
};
