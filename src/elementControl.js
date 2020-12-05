export const showCountInput = () => {
  const racingCountDiv = document.querySelector('#racing-count-div');
  const resultDiv = document.querySelector('#result');
  const carNameSubmit = document.querySelector('#car-names-submit');
  const carNameInput = document.querySelector('#car-names-input');

  racingCountDiv.style.display = 'block';
  carNameSubmit.disabled = true;
  carNameInput.disabled = true;
};

export const showResult = () => {};
