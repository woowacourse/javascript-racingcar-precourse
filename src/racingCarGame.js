import CarNamesForm from './components/carNamesForm.js';
import RacingCountForm from './components/racingCountForm.js';
import RacingResult from './components/racingResult.js';

export default function RacingCarGame(app) {
  this.state = { cars: [], count: 0 };

  const setCars = (racingCars) => {
    this.state.cars = racingCars;
    this.racingCountForm.show();
  };

  const setCount = (racingCount) => {
    this.state.count = racingCount;
    console.log(this.state.count);
  };

  const racing = () => {
    for (let i = 0; i < this.state.count; i++) {
      this.state.cars.forEach((car) => car.move());

      const racingProcess = this.state.cars
        .map((car) => `<span>${car.name}: ${car.distance}</span>`)
        .join('');

      this.racingResult.printProcess(racingProcess);
    }

    this.racingResult.printWinner(getWinner());
  };

  const getWinner = () => {
    const carsDistance = this.state.cars.map((car) => car.distance.length);
    const maxDistance = Math.max(...carsDistance);
    const winner = this.state.cars
      .filter((car) => car.distance.length === maxDistance)
      .map((car) => car.name)
      .join(', ');

    return winner;
  };

  this.render = () => {
    this.carNamesForm = CarNamesForm(setCars);
    this.racingCountForm = new RacingCountForm(setCount, racing);
    this.racingResult = new RacingResult(app);
  };
}
