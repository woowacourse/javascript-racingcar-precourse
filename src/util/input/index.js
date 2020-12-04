const splitByComma = (names) => names.split(",");

const checkEmptyInput = (value) => (value.length === 0 ? true : false);

const checkEmptyName = (namesArray) => {
  const isEmpty = namesArray.map((name) =>
    name.trim().length === 0 ? true : false
  );

  if (isEmpty.includes(true)) {
    return true;
  }
};

const checkOverFive = (namesArray) => {
  const NUMBER = 5;

  const isOverFive = namesArray.map((name) =>
    name.length > NUMBER ? true : false
  );

  if (isOverFive.includes(true)) {
    return true;
  }
};

export const namesValidation = (names) => {
  const namesArray = splitByComma(names);

  const isEmptyInput = checkEmptyInput(names);
  const isEmptyName = checkEmptyName(namesArray);
  const isOverFive = checkOverFive(namesArray);
};
