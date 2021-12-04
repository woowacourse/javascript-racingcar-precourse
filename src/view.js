export default class View {
  createRacingView(carObject) {
    const fowardText = '-'.repeat(carObject.getForward());
    return `${carObject.getCarName()}: ${fowardText}<br/>`;
  }
}
