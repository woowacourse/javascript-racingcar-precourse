export const getCarsNameList = inputString => {
  const result = inputString
    .split(",")
    .map(name => name.trim())
    .filter(name => !!name);

  return result;
};

export const getRacingCount = inputString => {
  const result = parseInt(inputString);
  return result > 0 ? result : 0;
};
