function isFourHigher(number) {
  if (number >= 4) {
    return true;
  }
  return false;
}

function splitNamesString(names) {
  const splitedNames = names.split(',');
  return splitedNames;
}

export { isFourHigher, splitNamesString };
