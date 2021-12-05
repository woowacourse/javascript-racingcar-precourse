export const isOverFive = carInput => {
  carInput = carInput.split(',').map(car => car.trim());
  if (carInput.some(car => car.length > 5)) {
    return true;
  }
  return false;
};

export const isDuplicate = carInput => {
  carInput = carInput.split(',').map(car => car.trim());
  if (carInput.length !== new Set(carInput).size) {
    return true;
  }
  return false;
};

export const alertCarInputError = carInput => {
  if (carInput.length === 0) {
    alert('빈값을 입력했습니다. 자동차 이름을 입력하세요.');
  } else if (isOverFive(carInput)) {
    alert('자동차 이름은 5글자를 초과할 수 없습니다.');
  } else if (isDuplicate(carInput)) {
    alert('중복된 이름이 있습니다.');
  }
};
