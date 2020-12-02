const $carGameContainer = document.querySelector('.car-game-container');

const addIdsToParentNodes = () => {
  const [_getCarNames, _getRacingCount] = $carGameContainer.getElementsByTagName('div');
  _getCarNames.id = 'get-car-names';
  _getRacingCount.id = 'get-racing-count';
}

const addIdsToInputCarNamesNode = () => {
  
}

const addIdsToInputGetRacingCountNode = () => {
  
}

export default () => {
  addIdsToParentNodes();
  addIdsToInputCarNamesNode();
  addIdsToInputGetRacingCountNode();
}