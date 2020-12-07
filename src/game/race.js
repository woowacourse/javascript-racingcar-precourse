function getRandomNumber() {
  const min = 0;
  const max = 10;

  return Math.floor(Math.random() * (max - min)) + min;
}

function getRaceResult(car) {
  if (getRandomNumber() > 3) {
    car.count++;
  }
}

export default function race(carList) {
  carList.forEach((car) => getRaceResult(car));
}
