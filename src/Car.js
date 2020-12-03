export default function Car(name = '') {
    let carName = name;
    let forwardCnt = 0;

    this.forwardCar = forwardCar;
    this.isValidCarName = isValidCarName;
}

Car.forwardCar = (car) => {
    const digit = getRandomDigit();
    if (digit >= 4) {
        car.setForwardCnt(car.getForwardCnt() + 1);
    }
    return car;
}

Car.isValidCarName = (carNames) => carNames.every(
    carName => (isUnderFiveDigits(carName) && !isOnlySpaceString(carName))
);