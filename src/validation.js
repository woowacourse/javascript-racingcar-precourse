export const checkValidNameLength = (names) =>
  names.every((name) => name.length <= 5);
export const checkBlankName = (names) => names.every((name) => name !== '');
export const checkDuplicatedName = (names) => {
  const set = new Set(names);
  return set.size === names.length;
};

export const checkNameValidation = (names) =>
  checkValidNameLength(names) &&
  checkBlankName(names) &&
  checkDuplicatedName(names);
