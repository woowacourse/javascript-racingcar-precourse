export const isEveryStringLessOrEqualsFive = namesArray => {
  return namesArray.every(name => name.length <= 5);
};
export const hasSomeStringIncludeSpace = namesArray => {
  return namesArray.some(name => name.includes(' '));
};
export const hasSomeStringLengthGreaterThanFive = namesArray => {
  return namesArray.some(name => name.length > 5);
};
export const hasStringDuplicated = namesArray => {
  return new Set(namesArray).size !== namesArray.length;
};
export const getRandomNumber = () => {
  return window.MissionUtils.Random.pickNumberInRange(0, 9);
};
export const generateFormHandler = ({ e, executor }) => {
  e.preventDefault();

  const [{ value: stringNumber }] = e.target;

  executor(stringNumber);
};
