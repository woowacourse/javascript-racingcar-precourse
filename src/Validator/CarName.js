const ValidationError = require("../Error/ValidationError")
const ERROR_MESSAGE = require("../Constants/error")

class CarName  {

    #splitCarNmae

    constructor(input) {
        this.#splitCarNmae = input.split(", ")
        this.#checkInput(input)
    }

    #checkInput(input) {
        this.#checkComma(input)
        this.#checkLength()
        this.#checkDuplication()
        
    }

    #checkComma(input) {
        if(this.#matchLength(input)) {
            throw new ValidationError(ERROR_MESSAGE.comma)
        }
    }

    #matchLength(input) {
       return (this.#splitCarNmae.length -1) !== [...input].reduce((acc,cur) => {
            if(cur === ",") acc += 1;
            return acc
        },0)
    }

    #checkLength() {
        this.#splitCarNmae.forEach(element => {
            if(element.length > 5){
                throw new ValidationError(ERROR_MESSAGE.length)
            }
        });
    }

    #checkDuplication() {
        const duplication = new Set( this.#splitCarNmae)
        if(this.#splitCarNmae.length !== duplication.size) {
            throw new ValidationError(ERROR_MESSAGE.duplication)
        }
    }
}

module.exports = CarName
