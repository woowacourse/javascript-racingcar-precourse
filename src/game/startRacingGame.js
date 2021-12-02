import playCarRacing from './playCarRacing.js';

export default function startRacingGame(racingCount, carObjectList) {
  for (let i = 0; i < racingCount; i++) {
    playCarRacing(carObjectList);
  }
  console.log(carObjectList);
}
