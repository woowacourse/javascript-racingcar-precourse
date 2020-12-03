export const hideCounterElement = () => {
  const $counterWrapper = document.body.querySelector(
    '#racing-count-container',
  );
  $counterWrapper.style.display = 'none';
};

export const hideResultElement = () => {
  const $resultWrapper = document.body.querySelector('#result-container');
  $resultWrapper.style.display = 'none';
};
