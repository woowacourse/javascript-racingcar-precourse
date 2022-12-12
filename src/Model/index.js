const Car = require("./Car")


class Model  {

    #carName



    saveCarName(input) {
        this.#carName = input    
    }

    calculate(input) {
       const car = new Car(this.#carName,input)
       return car.getResult()
    }
}

module.exports = Model
