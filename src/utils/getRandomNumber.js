import variablesObj from "../constants/variables.js";

export default () => {
  const min = variablesObj.RANDOM_NUMBER_MIN;
  const max = variablesObj.CAR_NAME_LENGTH_MAX;

  return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
};
