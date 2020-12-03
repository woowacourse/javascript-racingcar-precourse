import addIdsToNodes from '/src/lib/config/addIdsToNodes.js';

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