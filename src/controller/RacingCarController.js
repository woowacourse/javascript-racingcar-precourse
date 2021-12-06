import RacingCarModel from '../model/RacingCarModel.js';
import { isCarNamesInputValid, isCountInputValid } from '../utils/validity.js';
import RacingCarView from '../view/RacingCarView.js';

class RacingCarController {
  constructor(model, view) {
    this.RacingCarView = view;
    this.RacingCarModel = model;
  }

  triggerEvent() {
    // this.triggerCountInputEvent();
    this.triggerCarNamesInputEvent();
    this.RacingCarView.setOnCountSubmit(this.onCountSubmit.bind(this));
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
    this.RacingCarModel.makeCars();
    // controller에서 model의 데이터를 변경시키는 방법
    // model의 count를 변경시키는 방법으로 moveCars에 인수로 넘겨주었다.
    this.RacingCarModel.moveCars(racingCount);
    const winner = this.RacingCarModel.makeWinner();
    this.RacingCarView.showWinner(winner);

    const roundResult = this.RacingCarModel.makeRoundResult();
    this.RacingCarView.showRoundResult(roundResult);
    this.RacingCarView.showResultDOM();
  }

  triggerCarNamesInputEvent() {
    this.RacingCarView.$carNamesSubmitButton.addEventListener('click', (e) =>
      this.onCarNamesSubmit(e),
    );
  }

  onCarNamesSubmit(e) {
    e.preventDefault();
    const carNames = this.RacingCarView.$carNamesInput.value;
    // model의 carNamesArray를 변경시키는 방법
    this.RacingCarModel.parseCarNamesToArray(carNames);

    if (!isCarNamesInputValid(this.RacingCarModel.carNamesArray)) {
      return;
    }
    this.RacingCarView.showCountDOM();
  }
}

export default RacingCarController;
