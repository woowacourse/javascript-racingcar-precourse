export const getUserInputForCarNames = () => {
  return document.getElementById('car-names-input').value.toString();
};

export const userInputStringToArrayConverter = (userInput) => {
  const userInputNoVacuum = userInput.replaceAll(' ', '');
  const userInputArray = userInputNoVacuum.split(',');

  return userInputArray;
};
