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

const checkDuplicateName = (namesArray) => {
  const namesSet = new Set(namesArray);

  if (namesSet.size !== namesArray.length) {
    return true;
  }
};

const checkSingle = (namesArray) => (namesArray.length < 2 ? true : false);

export const namesValidation = (names) => {
  const namesArray = splitByComma(names);

  const isEmptyInput = checkEmptyInput(names);
  const isEmptyName = checkEmptyName(namesArray);
  const isSingle = checkSingle(namesArray);
  const isOverFive = checkOverFive(namesArray);
  const isDuplicate = checkDuplicateName(namesArray);
};
