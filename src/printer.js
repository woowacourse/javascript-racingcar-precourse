export class Printer {
  showWinner = (cars) => {
    const resultContainer = document.getElementById("result");
    let winner = [];

    cars.forEach((car) => {
      if (winner.length === 0 || winner[0].move < car.move) {
        winner = [car];
      } else if (winner[0].move === car.move) {
        winner.push(car);
      }
    });

    let result = winner.map((car) => {
      return car.name;
    });
    resultContainer.innerHTML += `최종 우승자: ${result.join(", ")}`;
  };

  showGameResult = (cars) => {
    const resultContainer = document.getElementById("result");

    cars.forEach((car) => {
      resultContainer.innerHTML += `${car.name}: ${"-".repeat(
        car.move
      )} <br />`;
    });
    resultContainer.innerHTML += "<br />";
  };
}

export const { showWinner, showGameResult } = new Printer();
