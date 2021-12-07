import RacingCarModel from '../model/RacingCarModel.js';
import { isCarNamesInputValid, isCountInputValid } from '../utils/validity.js';

class RacingCarController {
  constructor(model, view) {
    this.RacingCarView = view;
    this.RacingCarModel = model;
  }

  triggerEvent() {
    this.RacingCarView.setOnCountSubmit(this.onCountSubmit.bind(this));
    this.RacingCarView.setOnCarNamesSubmit(this.onCarNamesSubmit.bind(this));
  }

  onCarNamesSubmit(carNames) {
    console.log(`carNames`, carNames);
    this.RacingCarModel.parseCarNamesToArray(carNames);
    if (!isCarNamesInputValid(this.RacingCarModel.carNamesArray)) {
      return;
    }
    this.RacingCarView.showCountDOM();
  }

  // triggerCountInputEvent() {
  // this.RacingCarView.$racingCountSubmitButton.addEventListener('click', (e) =>
  //   this.onCountSubmit(e),
  // );
  // }

  onCountSubmit(racingCount) {
    // controller에서 view를 직접 접근하고 있다.
    // 직접 접근하지 않으려고, view를 사용하는 것인데!

    // eventHandler를 어디에 넣을까?
    // DOM은 view가 알고 있어야 하고, DOM을 붙이는 것은 view여야 한다!
    // 위임할 수 있다.?!
    // view에
    console.log(`racingCount`, racingCount);
    if (!isCountInputValid(racingCount)) {
      return;
    }
    this.RacingCarModel.startCars(racingCount);
    // 객체지향 - 추상화. 다른 객체에서 무엇을 하고 있는지 몰라야 한다.
    const roundResult = this.RacingCarModel.makeRoundResult();
    const winner = this.RacingCarModel.makeWinner();

    this.RacingCarView.showRoundResult(roundResult);
    this.RacingCarView.showWinner(winner);
    this.RacingCarView.showResultDOM();
  }
}

export default RacingCarController;
