export const addIdToElements = () => {
  const [carNamesInput, racingCountInput] = document.getElementsByTagName(
    'input'
  );
  const [carNamesSubmit, racingCountSubmit] = document.getElementsByTagName(
    'button'
  );
  carNamesInput.id = 'car-names-input';
  racingCountInput.id = 'racing-count-input';
  carNamesSubmit.id = 'car-names-submit';
  racingCountSubmit.id = 'racing-count-submit';

  const childrenOfCarGameContainer = document.querySelector(
    '.car-game-container'
  ).children;
  childrenOfCarGameContainer[1].id = 'count-input-part';
  const childrenOfApp = document.querySelector('#app').children;
  childrenOfApp[3].id = 'result-part';
};
