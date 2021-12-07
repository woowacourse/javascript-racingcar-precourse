export default class Winner {
  constructor(cars) {
    this.message = "";
    this.setWinnerMessage(cars);
  }

  getWinner = (cars) => {
    const maxDistance = this.getMaxDistance(cars);

    return cars
      .filter((car) => car.getDistance() === maxDistance)
      .map((car) => car.getName());
  };

  getMaxDistance = (cars) => {
    return cars
      .sort((a, b) => b.getDistance() - a.getDistance())[0]
      .getDistance();
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
