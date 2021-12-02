import { VALID_NUMBER } from "./constant";

export const isUnderZero = (racingCount) => {
  return racingCount <= VALID_NUMBER.RACING_COUNT;
};

export const isDuplicatedCarName = (carNames) => {
  return [...new Set(carNames)].length !== carNames.length;
};

export const hasEmpty = (carNames) => {
  return carNames.some((carName) => carName === "");
};

export const isInvalidCarNameLength = (carNames) => {
  return carNames.some(
    (carName) => carName.length > VALID_NUMBER.CAR_NAME_LENGTH
  );
};

export const hasSpace = (carNames) => {
  return carNames.some((carName) => carName.match(/[" "]/));
};
