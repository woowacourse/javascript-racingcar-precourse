export default function addTagID() {
  const $carGameContainer = document.querySelector('.car-game-container');

  $carGameContainer.querySelector('div > input').id = 'car-names-input';
  $carGameContainer.querySelector('div > button').id = 'car-names-submit';
  $carGameContainer.querySelector('div:last-child > input').id =
    'racing-count-input';
  $carGameContainer.querySelector('div:last-child > button').id =
    'racing-count-submit';
}
