export const getRandomNumber = (min, max) => {
    
  return Math.floor((Math.random() * (max - min + 1)) + min);
};

export const isMovingForward = () => {
  const MIN = 0;
  const MAX = 9;
  const BASE_POINT = 4;
  
  const randomNumber = getRandomNumber(MIN, MAX);

  return randomNumber >= BASE_POINT;
};