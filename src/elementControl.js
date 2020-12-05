export const showCountInput = () => {
  const racingCountDiv = document.querySelector('#racing-count-div');
  const resultDiv = document.querySelector('#result');
  const carNameSubmit = document.querySelector('#car-names-submit');

  racingCountDiv.style.display = 'block';
  carNameSubmit.disabled = true;
};

export const showResult = () => {};
