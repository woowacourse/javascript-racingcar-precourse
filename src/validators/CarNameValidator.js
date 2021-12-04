export default {
  checkAtLeastOneCar(splittedCarNames) {
    if (!splittedCarNames[0]) {
      alert('자동차를 최소한 하나 이상 입력해주세요');
      return false;
    }
    return true;
  },
  checkCarNameDuplicated(splittedCarNames) {
    const set = new Set();
    splittedCarNames.forEach(carName => set.add(carName));
    if (set.size !== splittedCarNames.length) {
      alert('자동차 이름이 겹쳤습니다.');
      return false;
    }
    return true;
  },
  checkCarNameUnderFiveLetter(splittedCarNames) {
    for (let i = 0; i < splittedCarNames.length; i += 1) {
      if (splittedCarNames[i].length > 5) {
        alert('자동차 이름은 5자 이하만 가능합니다.');
        return false;
      }
    }
    return true;
  },
};
