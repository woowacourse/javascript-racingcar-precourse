import hiddenTags from './utils/hiddenTags.js';
import inputCarNames from './components/inputCarNames.js';

export default function initializationGame($element) {
  const $gameContainer = $element.querySelector('.car-game-container');

  hiddenTags();
  inputCarNames($gameContainer);
}
