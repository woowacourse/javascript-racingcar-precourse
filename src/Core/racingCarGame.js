import { countMoves } from "../Manager/gameManager.js";

export default function RacingCarGame() {
  this.play = function (cars) {
    const winner = countMoves(cars);
    let winnerNames = [];
    winner.forEach((car) => winnerNames.push(car.name));

    return winnerNames.join(", ");
  };
}
