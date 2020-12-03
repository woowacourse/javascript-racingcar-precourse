export const getRandomNumber = (min, max) => {
  return Math.floor(Math.randem() * (max - min) + min);
};

export default getRandomNumber;
