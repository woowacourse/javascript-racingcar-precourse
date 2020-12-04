const getCarsNameList = inputString => {
  const result = inputString
    .split(",")
    .map(name => name.trim())
    .filter(name => !!name);

  if (!result.every(name => name.length <= 5)) {
    return null;
  }

  return result;
};

const getTryCount = inputString => {
  const result = parseInt(inputString);
  return result > 0 ? result : 0;
};
