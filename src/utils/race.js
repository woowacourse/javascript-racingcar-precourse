import printRace from '../dom/printRace.js';

export default function race(carArray) {
  carArray.forEach((car) => {
    car.move();
  });

  printRace(carArray);
}
