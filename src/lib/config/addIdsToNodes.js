const $carGameApp = document.querySelector('#app');

const addIdsToParentNodes = () => {
  const [
    $carGameContainer,
    $carNamesContainer, 
    $getRacingCount,
    $result
  ] = $carGameApp.getElementsByTagName('div');

  $carGameContainer.id = 'car-game-input'
  $carNamesContainer.id = 'car-names-container';
  $getRacingCount.id = 'racing-count-container';
  $result.id = 'result-container';
}

const addIdsToInputCarNamesNode = () => {
  const [$carNamesInput] = document.querySelector('#car-names-container').getElementsByTagName('input');
  const [$carNamesSubmit] = document.querySelector('#car-names-container').getElementsByTagName('button');
  
  $carNamesInput.id = 'car-names-input';
  $carNamesSubmit.id = 'car-names-submit';
}

const addIdsToInputGetRacingCountNode = () => {
  const [$racingCountInput] = document.querySelector('#racing-count-container').getElementsByTagName('input');
  const [$racingCountSubmit] = document.querySelector('#racing-count-container').getElementsByTagName('button');
  
  $racingCountInput.id = 'racing-count-input';
  $racingCountSubmit.id = 'racing-count-submit';
}

export default () => {
  addIdsToParentNodes();
  addIdsToInputCarNamesNode();
  addIdsToInputGetRacingCountNode();
}