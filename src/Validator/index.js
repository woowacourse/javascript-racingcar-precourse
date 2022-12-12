const CarName = require("./CarName");
const Try = require("./Try");

const Validator = {

    checkCarName(input) {
        new CarName (input)
    },

    checkTry(input) {
        new Try (input)
    }

}

module.exports = Validator;