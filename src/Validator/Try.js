const ValidationError = require("../Error/ValidationError")

const ERROR_MESSAGE = {
    number : "숫자만 입력하실 수 있습니다.",
    zero : "숫자가 0으로 시작할 수 없습니다."
}

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