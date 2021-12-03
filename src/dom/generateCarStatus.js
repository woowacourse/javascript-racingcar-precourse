import generateTextElement from './utils/generateTextElement.js';
import getCarPositionStatus from './getCarPositionStatus.js';

function generateCarStatus(name, position) {
  const positionStatus = getCarPositionStatus(position);
  return generateTextElement('div', `${name}: ${positionStatus}`);
}
export default generateCarStatus;
