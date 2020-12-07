export const random = () => {
  return Math.floor(Math.random() * 10);
};

export const findMaxDistance = cars => {
  const maxValue = Math.max.apply(
    cars,
    cars.map(car => {
      return car.distance;
    })
  );
  return maxValue;
};

export const findSameValue = (cars, maxDistance) => {
  let winners = [];
  for (let car of cars) {
    if (car.distance === maxDistance) {
      winners.push(car.name);
    }
  }
  return winners;
};
