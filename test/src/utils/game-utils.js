import { state } from '../index.js';

export const makeNewCars = function (carNamesArray) {
  carNamesArray.forEach((name) => state.carArray.push(new carNamesArray(name)));
};
