import { DEFAULT_POSITION } from "./constants.js";

export default class Car {
  position = DEFAULT_POSITION;

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }
}
