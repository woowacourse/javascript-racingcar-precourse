export default class Car {
  constructor(name) {
    this._name = name;
    this._distance = 0;
  }

  go = value => {
    if (value >= 4) {
      this._distance += 1;
    }
  };

  getData = () => {
    return {
      name: this._name,
      distance: this._distance,
    };
  };
}
