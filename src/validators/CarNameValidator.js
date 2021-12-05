export default {
  checkAtLeastOneCar(splittedCarNames) {
    return splittedCarNames[0];
  },
  checkCarNameDuplicated(splittedCarNames) {
    const set = new Set();
    splittedCarNames.forEach(carName => set.add(carName));
    return set.size === splittedCarNames.length;
  },
  checkCarNameUnderFiveLetter(splittedCarNames) {
    for (let i = 0; i < splittedCarNames.length; i += 1) {
      if (splittedCarNames[i].length > 5) return false;
    }
    return true;
  },
};
