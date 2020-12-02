const $carGameContainer = document.querySelector('.car-game-container');

const addIdsToParentNodes = () => {
  const [_getCarNames, _getRacingCount] = $carGameContainer.getElementsByTagName('div');
  
  _getCarNames.id = 'get-car-names';
  _getRacingCount.id = 'get-racing-count';
}

const addIdsToInputCarNamesNode = () => {
  const [_carNamesInput] = document.querySelector('#get-car-names').getElementsByTagName('input');
  const [_carNamesSubmit] = document.querySelector('#get-car-names').getElementsByTagName('button');
  
  _carNamesInput.id = 'car-names-input';
  _carNamesSubmit.id = 'car-names-submit';
}

const addIdsToInputGetRacingCountNode = () => {
  const [_racingCountInput] = document.querySelector('#get-racing-count').getElementsByTagName('input');
  const [_racingCountSubmit] = document.querySelector('#get-racing-count').getElementsByTagName('button');
  
  _racingCountInput.id = 'racing-count-input';
  _racingCountSubmit.id = 'racing-count-submit';
}

export default () => {
  addIdsToParentNodes();
  addIdsToInputCarNamesNode();
  addIdsToInputGetRacingCountNode();
}