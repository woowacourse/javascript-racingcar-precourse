import { NUM } from '../constants/index.js';

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
    return false;
  }
  if (isNameEmpty(names)) {
    return false;
  }
  if (isDuplicatedName(names)) {
    return false;
  }

  return true;
};
