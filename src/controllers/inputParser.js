import Car from '../models/car.js';

export const parseCars = (text) =>
  text.split(',').map((carName) => new Car(carName.trim()));

export const parseRacingCount = (text) => Number(text);
