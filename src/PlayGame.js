function play() {
  for (let i = 0; i < window.cars.length; i += 1) {
    const randomNumber = window.MissionUtils.Random.pickNumberInRange(0, 9);

    if (randomNumber >= 4) window.cars[i].forwardCount += 1;
  }
}

export default function playRacingGame(racingCount) {
  for (let i = 0; i < racingCount; i += 1) {
    play();
  }
}
