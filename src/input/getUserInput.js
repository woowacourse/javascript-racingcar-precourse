function userInputHandler(target) {
  if (target.previousSibling.previousSibling.type === 'text') {
    //
  }
  if (target.previousSibling.previousSibling.type === 'number') {
    //
  }
}

function carGameContainerClickHandler({ target }) {
  if (target.nodeName === 'BUTTON') {
    userInputHandler(target);
  }
}

export default function getUserInput() {
  const $carGameContainer = document.querySelector('.car-game-container');

  $carGameContainer.addEventListener('click', carGameContainerClickHandler);
}
