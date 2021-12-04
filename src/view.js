export default class View {
  static createRacingView(carObject) {
    const fowardText = '-'.repeat(carObject.getForward());
    return `${carObject.getCarName()}: ${fowardText}<br/>`;
  }
}
