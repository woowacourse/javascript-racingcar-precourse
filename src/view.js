export default class View {
  static getRacingStatus(carObject) {
    const fowardText = '-'.repeat(carObject.getForward());

    return `${carObject.getCarName()}: ${fowardText}<br/>`;
  }

  static getWinnerCarNames(carObjects) {
    const forwardArray = [];
    const winnerCarNameArray = [];
    carObjects.forEach((carObject) =>
      forwardArray.push(carObject.getForward()),
    );
    const winnerForward = Math.max(...forwardArray);
    forwardArray.forEach((forward, idx) => {
      if (forward === winnerForward) {
        winnerCarNameArray.push(carObjects[idx].getCarName());
      }
    });

    return `<strong>${winnerCarNameArray.join(',')}</strong>`;
  }
}
