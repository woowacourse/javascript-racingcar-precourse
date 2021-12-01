export const sortByLocation = (cars) => {
  const carsSortedLocation = cars.sort((a, b) => b.location - a.location);

  return carsSortedLocation;
};
