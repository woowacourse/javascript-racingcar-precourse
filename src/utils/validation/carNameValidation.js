export const carNameValidation = carNames => {
  const validation = {
    isError: false,
    inValidText: '',
  };

  carNames.map(carName => {
    if (!carName) {
      validation.isError = true;
      validation.inValidText = '자동차 이름에 공백이 있습니다.';
      return validation;
    }

    if (carName.length > 5) {
      validation.isError = true;
      validation.inValidText = '자동차 이름이 5글자가 넘습니다.';
      return validation;
    }

    if (carNames.indexOf(carName) !== carNames.lastIndexOf(carName)) {
      validation.isError = true;
      validation.inValidText = '중복된 자동차 이름이 있습니다.';
      return validation;
    }
  });

  return validation;
};
