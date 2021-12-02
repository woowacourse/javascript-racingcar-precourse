const descByLocation = (a, b) => {
  return b.getLocation() - a.getLocation();
};

const sortByLocation = cars => {
  const carsSortedLocation = cars.sort(descByLocation);

  return carsSortedLocation;
};

export { sortByLocation };
