export default class CarFactory {
  constructor() {
    this.makeCarArray();
    // this.carNameArray = this.makeCarNameArray();
  }

  makeCarArray() {
    const _carNameArray = this.getCarNames();
    let _carArray = [];

    // if (this.isValidTheNumberOfCar(_carNameArray)) {
    //   for (let i = 0; i < _carNameArray.length; i++) {
    //     _carArray.push(new Car(_carNameArray[i]))
    //   }
    // } else {

    // }

    // console.log(_carArray);

  }

  getCarNames() {
    let _tmpCarNamesArray
      = document.querySelector("#car-names-input").value.split(",");

    if (!this.isValidCarName(_tmpCarNamesArray)) {
      alert("1자 이상 5자 이하의 공백이 아닌 자동차 이름을 입력해주세요.");
    } else if (!this.isValidTheNumberOfCar(_tmpCarNamesArray)) {
      alert("2대 이상의 자동차 이름을 입력해주세요.");
    } else {
      return _tmpCarNamesArray
    }
  }

  isValidCarName(tmpCarNamesArray) {
    let _carNameCandidate = "";

    for (let i = 0; i < tmpCarNamesArray.length; i++) {
      _carNameCandidate = tmpCarNamesArray[i].trim();

      if (_carNameCandidate.length === 0 || _carNameCandidate.length > 5) {
        return false;
      }
    }

    return true;
  }

  isValidTheNumberOfCar(tmpCarNamesArray) {
    return (tmpCarNamesArray.length > 1);
  }

  getCarNameArray() {
    return this.carNameArray;
  }
}