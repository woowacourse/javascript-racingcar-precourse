export default function RacingCarGame() {
  this.play = function (cars) {
    let winner = [];

    winner.push(cars[0]);

    for (let i = 1; i < cars.length; i++) {
      if (cars[i].move.length > winner[0].move.length) {
        winner = [];
        winner.push(cars[i]);
      } else if (cars[i].move.length == winner[0].move.length) {
        winner.push(cars[i]);
      } else {
        continue;
      }
    }

    let winnerNames = [];
    winner.forEach((x) => winnerNames.push(x.name));

    return winnerNames.join();
  };
}
