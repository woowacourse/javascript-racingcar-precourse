function isLongerThan(names, comparison) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > comparison) {
      return true;
    }
  }

  return false;
}

function isNames(names) {
  if (names[0] === '') {
    return false;
  }

  for (let i = 0; i < names.length; i++) {
    let name = Array.from(new Set(names[i]));
    if ((name.length === 1 && name[0] === ' ') || name.length === 0) {
      return false;
    }
  }

  return true;
}

function isOverlapedNames(names) {
  const dictObject = {};
  for (let i = 0; i < names.length; i++) {
    if (name in dictObject) {
      return true;
    }
    dictObject[name] = true;
  }

  return false;
}

function randomNumber(maxNumber, minNumber) {
  const number = Math.floor(
    Math.random() * (maxNumber - minNumber + 1) + minNumber,
  );

  return number;
}

export { isLongerThan, isNames, randomNumber, isOverlapedNames };
