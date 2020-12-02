import Car from '/src/lib/car.js';

const GO_AHEAD_MAX_VALUE = 9;

export const createRandomNumber = () => Math.floor(Math.random()*(GO_AHEAD_MAX_VALUE+1));

//자동차 정보 초기화하는 함수
export const getInitCarInfo = carNames => carNames.reduce((acc, carName) => {
  acc.push(new Car(carName));
  return acc;
}, []);

//우승자 정보 구하는 함수
export const getWinCars = cars => {

}
