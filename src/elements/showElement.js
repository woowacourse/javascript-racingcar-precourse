export const showCounterElement = () => {
  const $counterWrapper = document.body.querySelector(
    '#racing-count-container',
  );
  $counterWrapper.style.display = 'block';
};

export const showResultElement = () => {
  const $resultWrapper = document.body.querySelector('#result-container');
  $resultWrapper.style.display = 'block';
};
