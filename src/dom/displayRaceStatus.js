import generateTextElement from './utils/generateTextElement.js';

function displayRaceStatus(parent, raceStatus) {
  const paragraph = document.createElement('p');

  raceStatus.forEach((carStatus) => {
    paragraph.appendChild(generateTextElement('div', carStatus));
  });

  parent.appendChild(paragraph);
}

export default displayRaceStatus;
