export default function checkCarName(carNameInput) {
  const carNameArray = carNameInput.split(',').map(name => name.trim());
  if (checkEmptyInput(carNameInput)) {
    alert('입력 값이 없습니다.');
  } else if (checkEmptyName(carNameArray)) {
    alert('공백인 이름이 존재합니다.');
  } else if (checkOverFive(carNameArray)) {
    alert('5자 이상의 이름이 존재합니다.');
  } else if (checkDuplicated(carNameArray)) {
    alert('중복된 이름이 존재합니다.');
  } else {
    return true;
  }
}

const checkEmptyInput = carNameInput => {
  if (carNameInput.trim() === '') {
    return true;
  }
  return false;
};

const checkEmptyName = carNameArray => {
  for (const name of carNameArray) {
    if (name === '') return true;
  }
  return false;
};

const checkOverFive = carNameArray => {
  for (const name of carNameArray) {
    if (name.length > 5) return true;
  }
  return false;
};

const checkDuplicated = carNameArray => {
  const nameSet = new Set(carNameArray);
  if (carNameArray.length !== nameSet.size) {
    return true;
  }
  return false;
};
