import drawCarRacing from '../car/drawCarRacing.js';
import computeGameResult from './computeGameResult.js';

export default function playRacingCarGame({ gameCount, carInstanceList }) {
  for (let i = 0; i < gameCount; i++) {
    computeGameResult(carInstanceList);
    drawCarRacing(carInstanceList);
  }
}
