export default class Winner {
  constructor(cars) {
    this.message = "";
    this.generateWinnerMessage(cars);
  }

  getWinner = (cars) => {
    const maxDistance = this.getMaxDistance(cars);

    return cars
      .filter((car) => car.distance === maxDistance)
      .map((car) => car.name);
  };

  getMaxDistance = (cars) => {
    return cars.sort((a, b) => b.distance - a.distance)[0].distance;
  };

  setWinnerMessage = (cars) => {
    const winners = this.getWinner(cars);

    this.message = `
      <div>최종우승자:
        <span id = "racing-winners">${winners.join(", ")}</span>
      </div>
    `;
  };
}
