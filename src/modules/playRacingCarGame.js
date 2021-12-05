import drawCarRacing from './drawCarRacing.js';
import computeGameResult from './computeGameResult.js';
import drawRacingCarGameWinner from './drawRacingCarGameWinner.js';

export default function playRacingCarGame({ gameCount, carInstanceList }) {
  for (let i = 0; i < gameCount; i++) {
    computeGameResult(carInstanceList);
    drawCarRacing(carInstanceList);
  }
  drawRacingCarGameWinner(carInstanceList);
}
