import getRandomNumber from '../utils/getRandomNumber.js';

const calculateRandomNum = carArr => {
  carArr.forEach(car => {
    const randomNum = getRandomNumber();
    if (randomNum >= 4) {
      car.move += 1;
    }
  });
  return carArr;
};

export default calculateRandomNum;
