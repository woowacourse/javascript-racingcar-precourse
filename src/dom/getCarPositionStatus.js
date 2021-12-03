import { CAR_POSITION } from './const.js';

function getCarPositionStatus(position) {
  return CAR_POSITION.repeat(position);
}

export default getCarPositionStatus;
