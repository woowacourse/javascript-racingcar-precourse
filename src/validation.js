const checkValidNameLength = (names) => names.every((name) => name.length <= 5);
const checkBlankName = (names) => names.every((name) => name !== '');
const checkDuplicatedName = (names) => {
  const set = new Set(names);
  return set.size === names.length;
};

export const checkNameValidation = (names) =>
  checkValidNameLength(names) &&
  checkBlankName(names) &&
  checkDuplicatedName(names);

export const checkCountValidation = (userInput) =>
  !Number.isNaN(Number(userInput)) && Number(userInput) > 0;
