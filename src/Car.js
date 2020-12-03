import {
    isUnderFiveDigits,
    isOnlySpaceString,
    getRandomDigit,
    hasDuplicatedName
} from "./utils.js";

export default function Car(name = '') {
    this.carName = name;
    this.forwardCnt = 0;
};

Car.forwardCar = (car) => {
    const digit = getRandomDigit();
    if (digit >= 4) {
        car.forwardCnt++;
    }
    return car;
};

Car.isValidCarName = (carNames) => {
    return carNames.every(
            carName => (
                isUnderFiveDigits(carName) &&
                !isOnlySpaceString(carName))
        ) &&
        !hasDuplicatedName(carNames);
};