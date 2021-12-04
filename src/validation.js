const checkValidNameLength = (names) => {
  return names.every(
    (name) => name.length <= 5
  );
}

export const checkValidation = (names) => {
  return checkValidNameLength(names);
}