import Car from './car.js';
import RacingCarGame from './racingCarGame.js';

describe('Car', () => {
  const car = new Car('car1');
  it('tryAdvance', () => {
    for (let i = 0; i < 100; i += 1) {
      car.tryAdvance();
    }
    expect(car.progress).toBeGreaterThan(0);
  });
});

describe('racingCarGame', () => {
  const car1 = new Car('car1');
  const car2 = new Car('car2');
  const car3 = new Car('car3');
  const car4 = new Car('car4');
  const racingCarGame = new RacingCarGame();
  racingCarGame.addCarToRaceCourse(car1);
  racingCarGame.addCarToRaceCourse(car2);
  racingCarGame.addCarToRaceCourse(car3);
  racingCarGame.addCarToRaceCourse(car4);
  it('play', () => {
    const tryCount = 10;
    racingCarGame.play(tryCount);
    expect(racingCarGame.raceCourseProcessRecords.length).toBe(10);
  });
});
