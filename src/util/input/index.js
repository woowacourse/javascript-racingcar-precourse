const splitByComma = (names) => names.split(",");

const checkEmptyName = (namesArray) => {
  const isEmpty = namesArray.map((name) =>
    name.trim().length === 0 ? true : false
  );

  if (isEmpty.includes(true)) {
    return true;
  }
};

export const namesValidation = (names) => {
  const namesArray = splitByComma(names);
  const isEmptyName = checkEmptyName(namesArray);
};
