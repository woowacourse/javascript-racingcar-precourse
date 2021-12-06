import ComputeProgress from './compute/computeProgress.js';
import DrawCarProgress from './draw/drawCarProgress.js';
import DrawWinner from './draw/drawWinner.js';

export default function Play({ gameCount, carList }) {
  for (let i = 0; i < gameCount; i++){
    ComputeProgress(carList);
    DrawCarProgress(carList);
  }
  DrawWinner(carList);
}