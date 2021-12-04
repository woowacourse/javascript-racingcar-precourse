import { TEXT_CAR_POSITION } from './const.js';

function getCarPositionStatus(position) {
  return TEXT_CAR_POSITION.repeat(position);
}

export default getCarPositionStatus;
