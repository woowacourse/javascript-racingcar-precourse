export const showCountInput = () => {
  const racingCountDiv = document.querySelector('#racing-count-div');
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmit = document.querySelector('#car-names-submit');

  racingCountDiv.style.display = 'block';
  carNameInput.disabled = true;
  carNameSubmit.disabled = true;
};

export const showResult = () => {
  const resultDiv = document.querySelector('#result');
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountSubmit = document.querySelector('#racing-count-submit');

  resultDiv.style.display = 'block';
  racingCountInput.disabled = true;
  racingCountSubmit.disabled = true;
};
