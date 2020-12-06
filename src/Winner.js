export default class Winner {
  constructor(carObjArray, carName) {
    this.carObjArray = carObjArray;
    this.carName = carName;
  }

  winnerHTML() {
    const winnerNameArray = this.getWinnerName();

    if (winnerNameArray.length > 1) {
      return `최종우승자: ${[...winnerNameArray].join(', ')}`;
    } else {
      return `최종우승자: ${winnerNameArray[0]}`;
    }
  }

  getWinnerName() {
    const maxIndexArray = this.getMaxIndex();
    const winnerNameArray = maxIndexArray.map((index) => {
      return this.carName[index];
    });

    return winnerNameArray;
  }

  getMaxIndex() {
    const positionArray = this.setPositionArray();
    const maxValue = this.getMaxValue(positionArray);
    let maxIndexArray = [];

    for (let i = 0; i < positionArray.length; i++) {
      if (positionArray[i] === maxValue) {
        maxIndexArray.push(i);
      }
    }

    return maxIndexArray;
  }

  setPositionArray() {
    const distanceArray = this.carObjArray.map((car) => car.position);

    return distanceArray;
  }

  getMaxValue(array) {
    const maxValue = array.reduce((prev, current) => {
      return prev > current ? prev : current;
    });

    return maxValue;
  }
}
