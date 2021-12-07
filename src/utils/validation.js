export default {
  checkValidCarName(carNamesInput) {
    const splittedCarNames = carNamesInput.split(',');
    if (!carNamesInput.length) {
      alert('자동차 이름이 없습니다.');
      return false;
    }
    if (!splittedCarNames.every((name) => name.length <= 5)) {
      alert('자동차 이름은 5자 이하입니다.');
      return false;
    }
    if (splittedCarNames.length !== new Set(splittedCarNames).size) {
      alert('중복된 이름이 있습니다.');
      return false;
    }
    return true;
  },
};
