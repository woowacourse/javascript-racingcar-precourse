import { Car } from "./carInstance";

export default function racing(carNames, racingCount) {
  let racingCars = [];
  let resultMessage = "";

  const race = () => {
    for (let i = 0; i < racingCount; i++) {
      racingCars.forEach(car => {
        car.move();
        resultMessage += car.getProgress();
      });
      resultMessage += `<br>`;
    }
    provideResult(resultMessage);
    getWinner();
  };

  const getWinner = () => {
    const maxCount = getMostMovedCount(racingCars);
    const winners = racingCars
      .filter(car => car.progress.length === maxCount)
      .map(car => car.name);
    winnerToText(winners);
  };

  const winnerToText = winners => {
    let winnerText = "";
    for (let i = 0; i < winners.length; i++) {
      winnerText += winners[i];
      if (i !== winners.length - 1) {
        winnerText += ",";
      }
    }
    provideWinner(winnerText);
  };

  const init = () => {
    carNames.split(",").forEach(name => racingCars.push(new Car(name)));
    race();
  };

  init();
}
