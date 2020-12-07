import { MESSAGE } from "../constants/constants.js";
import { showErrorMessages } from "../utils/handleDom.js";

const checkNameLengthOverFive = (elements) => {
  for (const element of elements) {
    if (element.length > 5) {
      return true;
    }
  }
  return false;
};

const isDuplicate = (elements) => {
  const elementsForComparing = new Set(elements);

  return elementsForComparing.length === elements.length;
};

const hasEmptyName = (elements) => {
  for (const element of elements) {
    if (element.length === 0) {
      return true;
    }
  }

  return false;
};

export const isValidNames = (names) => {
  const errorMessage = getErrorMessagesOfNameInputs(names);

  if (errorMessage !== "") {
    showErrorMessages(`${errorMessage}${MESSAGE.CHECK_GUIDE}`);
    return false;
  } else {
    return true;
  }
};

const getErrorMessagesOfNameInputs = (elements) => {
  let errorMessage = "";

  if (checkNameLengthOverFive(elements)) {
    errorMessage += `${MESSAGE.CAR_NAME_LENGTH_ERROR}/ `;
  }
  if (isDuplicate(elements)) {
    errorMessage += `${MESSAGE.DUPLICATE_ERROR}/ `;
  }
  if (hasEmptyName(elements)) {
    errorMessage += `${MESSAGE.HAS_EMPTY_NAME_ERROR}/ `;
  }
  return errorMessage;
};

export const isValidCount = (count) => {
  const errorMessage = getErrorMessageOfCountInputs(count);

  if (errorMessage !== "") {
    showErrorMessages(`${errorMessage}${MESSAGE.CHECK_GUIDE}`);
    return false;
  } else {
    return true;
  }
};

const getErrorMessageOfCountInputs = (count) => {
  let errorMessage = "";

  if (isNumber(element)) {
    errorMessage += `${MESSAGE.ONLY_NUMBER_ERROR}`;
  }

  return errorMessage;
};
export const isNumber = (element) => {
  return Number.isNaN(parseInt(element));
};
