export const checkEmptyName = (namesArray) => {
  const isEmpty = namesArray.map((name) =>
    name.trim().length === 0 ? true : false
  );

  if (isEmpty.includes(true)) {
    return true;
  }
};

export const checkOverFive = (namesArray) => {
  const NUMBER = 5;

  const isOverFive = namesArray.map((name) =>
    name.length > NUMBER ? true : false
  );

  if (isOverFive.includes(true)) {
    return true;
  }
};

export const checkDuplicateName = (namesArray) => {
  const namesSet = new Set(namesArray);

  if (namesSet.size !== namesArray.length) {
    return true;
  }
};

export const checkSingle = (namesArray) =>
  namesArray.length < 2 ? true : false;
