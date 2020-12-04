import addIdsToNodes from './addIdsToNodes.js';

export const hideContainer = $container => {
  if(typeof($container) !== 'object') return;
  $container.setAttribute('style', 'display:none;');
}

export const hideUnusedContainers = () => {
  const $racingCountContainer = document.querySelector('#racing-count-container');
  const $resultContainer = document.querySelector('#result-container');
  [$racingCountContainer, $resultContainer].forEach($container => {
    hideContainer($container);
  })
}

export const settingGame = () => {
  addIdsToNodes();
  hideUnusedContainers();
}

export const showContainer = $container => {
  if(typeof($container) !== 'object') return;
  $container.removeAttribute('style');
}

export const disableInputs = ($input, $button) => {
  if(typeof($input) !== 'object' || typeof($button) !== 'object') return;
  $input.setAttribute('disabled', 'true');
  $button.setAttribute('disabled', 'true');
}

const getGameStepElements = cars => {
  //create array of elements to render each step
  //innerHtml should be used
  console.log(cars.map(car => car.name));
}

const renderGameSteps = (cars, $resultContainer) => {
  const $renderGameSteps = document.createElement('div');
  $renderGameSteps.id = 'render-game-step';

  getGameStepElements(cars);

  $resultContainer.appendChild($renderGameSteps);
}

const getWinCarsElement = winCars => {
  console.log(winCars.length === 1 ? winCars : winCars.join(','));
}

const renderWinCars = (winCars, $resultContainer) => {
  const $renderWinCars = document.createElement('div');
  $renderWinCars.id = 'render-win-cars';

  getWinCarsElement(winCars);

  $resultContainer.appendChild($renderWinCars);
}

export const renderResult = ($resultContainer, cars, winCars) => {
  renderGameSteps(cars, $resultContainer);
  renderWinCars(winCars, $resultContainer);
}