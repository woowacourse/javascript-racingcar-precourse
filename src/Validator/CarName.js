const ValidationError = require("../Error/ValidationError")

const ERROR_MESSAGE = {
    string_and_number : "숫자 또는 문자만 입력하실 수 있습니다.",
    comma : "콤마+스페이스로 여러대의 자동차이름을 구분해야합니다.",
    length: "자동차 이름은 5자 이하이어야 합니다.",
    duplication: "중복되는 자동차 이름은 만들 수 없습니다."
}

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