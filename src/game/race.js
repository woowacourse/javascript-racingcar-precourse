function getRandomNumber() {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}

export default function race(car) {
  if (getRandomNumber() > 3) {
    car.count++;
  }
}
