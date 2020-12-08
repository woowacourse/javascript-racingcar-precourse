export const getRandomNumber = (minNumber, maxNumber) => {
  return Math.floor(Math.random() * maxNumber) + minNumber;
};

export const isUniqueSet = array => {
  const uniqueSet = [...new Set(array)];
  return array.length === uniqueSet.length;
};
