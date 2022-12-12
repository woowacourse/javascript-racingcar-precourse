const ReadError = require('../Error/ReadError');
const ValidationError = require('../Error/ValidationError');
const Model = require('../Model');
const Validator = require('../Validator');
const View = require('../View');


const CAR_NAME = "CarName"
const V_CAR_NAME = "checkCarName"

class RacingController {
  #model;

  #view;

  #validator;

  constructor() {
    this.#model = Model
    this.#view = View;
    this.#validator = Validator;
  }

  start(){
    this.#inputCarName()
  }

  #inputCarName() {
    this.#view.readCarName(this.#readCarName.bind(this));
  }

  #readCarName(input) {
    if(this.#hasErrorOccurredByCheck(input,V_CAR_NAME)) return this.#retry(CAR_NAME);
    this.#model.saveCarName(input)
  }
  
   #hasErrorOccurredByCheck(input, name) {
    try {
    this.#validator[name](input);
    } catch (error) {
    return this.#handleError(error);
    }
    }

  #handleError(error) {
    if (error instanceof ValidationError) {
     this.#view.printError(new ReadError('Validation Error', error));
      return true;
    }
    throw error;
  } 

  #retry(input) {
    if (input === 'CarName') return this.#inputCarName();
  }

}

module.exports = RacingController
