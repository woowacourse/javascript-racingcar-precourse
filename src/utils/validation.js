import { CAR_NAME_MAX_LENGTH } from "./constants.js";

export const validateCarNames = (carNames) => {
  const validateForm = {
    isError: false,
    errorMessage: ``,
    carNames: [],
  };

  if (carNames.length === 0) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${carNames}"은 올바른 값이 아닙니다. 자동차 이름을 입력해 주세요.`;
    return validateForm;
  }
  if (/\s/g.test(carNames)) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${carNames}"은 올바른 값이 아닙니다. 공백은 입력 할 수 없습니다.`;
    return validateForm;
  }

  const carNamesArr = carNames.split(",");

  if (
    carNamesArr.filter(
      (name) => name.length === 0 || name.length > CAR_NAME_MAX_LENGTH
    ).length
  ) {
    validateForm.isError = true;
    validateForm.errorMessage = `"${carNames}"은 올바른 값이 아닙니다. 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 1자 이상, 5자 이하만 가능합니다.`;
    return validateForm;
  }

  validateForm.carNames = carNamesArr;
  return validateForm;
};
