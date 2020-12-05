const getRandomNumber = () => {
  let number = Math.floor(Math.random() * 9);
  console.log('숫자는', number);
  return number >= 4 ? true : false;
};

export const isForward = (cars) => {
  cars.forEach((car) => {
    console.log('차는', car.name);

    if (getRandomNumber()) {
      car.forwardCount++;
    }
  });
};

export const startGame = (times, cars) => {
  while (times) {
    isForward(cars);
    times--;
  }

  cars.forEach((e) => {
    console.log(e.name, e.forwardCount);
  });
};
