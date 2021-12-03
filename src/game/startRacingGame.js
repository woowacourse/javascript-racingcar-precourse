import playCarRacing from './playCarRacing.js';
import { cars } from '../init/cars.js';

export default function startRacingGame(racingCount) {
  for (let i = 0; i < racingCount; i++) {
    playCarRacing();
  }
  console.log(cars);
}
