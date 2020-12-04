const getCarsNameList = inputString => {
  const result = inputString
    .split(",")
    .map(name => name.trim())
    .filter(name => !!name);

  return result;
};

const getRacingCount = inputString => {
  const result = parseInt(inputString);
  return result > 0 ? result : 0;
};
