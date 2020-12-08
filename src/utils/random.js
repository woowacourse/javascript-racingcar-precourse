import { NUMBER as NUM } from "../constants/constants.js";

const getRandomNumber = (start, end) => {
  return Math.floor(Math.random() * end) + start;
};

export const setDistanceWithRandomNumber = (start, end) => {
  return getRandomNumber(start, end) > NUM.GO_FORWARD_CONDITION
    ? NUM.GO
    : NUM.STOP;
};
