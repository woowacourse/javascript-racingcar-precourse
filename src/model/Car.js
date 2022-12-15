const {
  movingCondition: { START, END, CRITERION },
} = require('../settings');
const {
  ERROR_MESSAGE: { carName },
  throwError,
} = require('../error/ErrorHandler');

class Car {
  #name;

  constructor(name) {
    Car.validate(name);
    this.#name = name;
  }

  static validate(name) {
    const isOverFiveCharacters = name.length > 5;
    throwError(isOverFiveCharacters, carName.length);

    const isEmpty = !name;
    throwError(isEmpty, carName.character);

    const isInvalidCharacter = !/^[a-zA-Z가-힣0-9]*$/.test(name);
    throwError(isInvalidCharacter, carName.character);
  }

  moveOnce(pickNumber) {
    const randomNumber = pickNumber(START, END);
    const isMovable = randomNumber >= CRITERION;

    return { name: this.#name, isMovable };
  }
}

module.exports = Car;
