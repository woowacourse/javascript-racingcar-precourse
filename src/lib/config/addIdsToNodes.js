const $carGameApp = document.querySelector('#app');

const addIdsToParentNodes = () => {
  const [
    $carGameContainer,
    $getCarNames, 
    $getRacingCount,
    $result
  ] = $carGameApp.getElementsByTagName('div');

  console.log(typeof $getCarNames);

  $carGameContainer.id = 'car-game-input'
  $getCarNames.id = 'get-car-names';
  $getRacingCount.id = 'get-racing-count';
  $result.id = 'result';
}

const addIdsToInputCarNamesNode = () => {
  const [$carNamesInput] = document.querySelector('#get-car-names').getElementsByTagName('input');
  const [$carNamesSubmit] = document.querySelector('#get-car-names').getElementsByTagName('button');
  
  $carNamesInput.id = 'car-names-input';
  $carNamesSubmit.id = 'car-names-submit';
}

const addIdsToInputGetRacingCountNode = () => {
  const [$racingCountInput] = document.querySelector('#get-racing-count').getElementsByTagName('input');
  const [$racingCountSubmit] = document.querySelector('#get-racing-count').getElementsByTagName('button');
  
  $racingCountInput.id = 'racing-count-input';
  $racingCountSubmit.id = 'racing-count-submit';
}

export default () => {
  addIdsToParentNodes();
  addIdsToInputCarNamesNode();
  addIdsToInputGetRacingCountNode();
}