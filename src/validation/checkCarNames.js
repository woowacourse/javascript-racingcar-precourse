import { MESSAGE } from "../constant/alertMessage.js";
import { CAR_NAME } from "../constant/carName.js";

const isSplitComma = carNames => {
  const includesComma = [...carNames].includes(",");
  if (!includesComma) {
    return alert(MESSAGE.COMMA);
  }
  return carNames.split(",");
};

const isValidLength = carNames => {
  const isValid = carNames.every(
    name => name.length > CAR_NAME.MININUM && name.length <= CAR_NAME.LENGTH
  );
  if (!isValid) {
    return alert(MESSAGE.INVALID_CAR_LENGTH);
  }
  return true;
};

const isValidCarNames = carNames => {
  const invalidValue = carNames.some(name => /[^A-Za-z가-힇]/g.test(name));
  if (invalidValue) {
    return alert(MESSAGE.INVALID_CAR_NAME);
  }
  return true;
};

const checkDuplicate = carNames => {
  const removeDulicate = new Set([...carNames]);
  if (removeDulicate.size !== carNames.length) {
    return alert(MESSAGE.DUPLICATE_CAR_NAME);
  }
  return true;
};

const changeArrayRemoveSpace = carNames =>
  carNames.split(",").map(name => name.trim());

export default function checkValidCarNames(names) {
  if (!isSplitComma(names)) {
    return false;
  }
  const namesArray = changeArrayRemoveSpace(names);
  return (
    isValidLength(namesArray) &&
    isValidCarNames(namesArray) &&
    checkDuplicate(namesArray)
  );
}
