import { ERROR, NUM } from '../constants/index.js';

const isExceedNameLength = names => {
  return names.some(name => name.length > NUM.MAX_NAME_LENGTH);
};

const isNameEmpty = names => {
  return names.some(name => name.trim().length === 0);
};

const isDuplicatedName = names => {
  return new Set([...names]).size !== names.length;
};

export const isValidNames = names => {
  if (isExceedNameLength(names)) {
    alert(ERROR.NAME_LENGTH_IS_LONG);
    return false;
  }
  if (isNameEmpty(names)) {
    alert(ERROR.NAME_IS_EMPTY);
    return false;
  }
  if (isDuplicatedName(names)) {
    alert(ERROR.NAME_IS_DUPLICATED);
    return false;
  }

  return true;
};

export const isValidCount = count => {
  if (count < NUM.MIN_COUNT) {
    return false;
  }

  return true;
};
