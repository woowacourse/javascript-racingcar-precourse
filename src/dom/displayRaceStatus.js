import generateRaceStatus from './generateRaceStatus.js';

function displayRaceStatus(parent, cars) {
  const raceStatus = generateRaceStatus(cars);
  const paragraph = document.createElement('p');

  raceStatus.forEach((status) => {
    paragraph.appendChild(status);
  });

  parent.appendChild(paragraph);
}

export default displayRaceStatus;
