const isWrongLength = carName => {
  if (carName.length <= 0 || carName.length > 5) {
    alert(`자동차 이름을 5자 이하로 정해주세요.`);
    return true;
  }
  return false;
};

const isDuplicatedName = (carNamesList, carName) => {
  if (carNamesList.indexOf(carName) !== carNamesList.lastIndexOf(carName)) {
    alert(`이름이 중복되지 않도록 해주세요.`);
    return true;
  }
  return false;
};

const isValidCarNames = carNamesList => {
  for (let i = 0; i < carNamesList.length; i++) {
    if (isWrongLength(carNamesList[i])) {
      return false;
    }
    if (isDuplicatedName(carNamesList, carNamesList[i])) {
      return false;
    }
  }
  return true;
};

const converterStringToArray = carNamesString => {
  let carNamesList = [];
  carNamesString
    .split(',')
    .forEach(carName => carNamesList.push(carName.trim()));
  return carNamesList;
};

export const submitCarNames = () => {
  const carNamesInput = document.querySelector('#car-names-input');
  const carNamesList = converterStringToArray(carNamesInput.value);
  if (isValidCarNames(carNamesList)) {
    return carNamesList;
  }
  carNamesInput.value = '';
  return [];
};
