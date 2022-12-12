const ValidationError = require("../Error/ValidationError")
const ERROR_MESSAGE = require("../Constants/error")


class Try{

    constructor(input) {
        this.#checkInput(input)
    }

    #checkInput(input) {
        this.#checkNumber(input)
        this.#checkZero(input)
    }

    #checkNumber(input) {
        if(/\D/.test(input)) {
            throw new ValidationError(ERROR_MESSAGE.number)
        }
    }

    #checkZero(input) {
        if(/^0/.test(input)) {
            throw new ValidationError(ERROR_MESSAGE.zero)
        }
    }
}

module.exports = Try
