import displayRaceStatus from './displayRaceStatus.js';
import { ID_RACING_RESULT } from './const.js';

function displayRaceStatusList(parent, raceStatusList) {
  const div = document.createElement('div');
  div.id = ID_RACING_RESULT;

  raceStatusList.forEach((raceStatus) => {
    displayRaceStatus(div, raceStatus);
  });

  parent.appendChild(div);
}

export default displayRaceStatusList;
