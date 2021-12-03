import { SEPARATOR } from './constants.js';

export default function (carNamesString) {
  return carNamesString.split(SEPARATOR).map((carName) => carName.trim());
}
