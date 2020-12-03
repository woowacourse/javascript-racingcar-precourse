export default class CarFactory {
  constructor() {
    this.carNameArray = this.makeCarNameArray();

    // this.makeCarNameArray();
  }

  makeCarNameArray() {
    let _tmpCarNamesArray
      = document.querySelector("#car-names-input").value.split(",");

    // console.log(_tmpCarNamesArray);

    _tmpCarNamesArray = this.validateName(_tmpCarNamesArray);

    // console.log(_tmpCarNamesArray);

  }

  validateName(tmpCarNamesArray) {
    let _validCarNamesArray = [];
    let _carNameCandidate = "";

    for (let i = 0; i < tmpCarNamesArray.length; i++) {
      _carNameCandidate = tmpCarNamesArray[i].trim();

      if (
        _carNameCandidate != ""
        && this.isValidLength(_carNameCandidate)
      ) {
        _validCarNamesArray.push(_carNameCandidate);
      }
    }

    return _validCarNamesArray;
  }

  isValidLength(carNameCandiate) {
    return (carNameCandiate.length >= 1 && carNameCandiate.length <= 5);
  }

  getCarNameArray() {
    return this.carNameArray;
  }
}