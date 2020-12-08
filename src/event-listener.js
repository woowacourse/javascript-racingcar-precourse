import SubmitHandler from './submit-handler.js';

export default class EventListener {
  constructor(racingCarGame) {
    document.addEventListener('click', this.onClick.bind(this));
    this.submitHandler = new SubmitHandler(racingCarGame);
  }

  onClick(event) {
    if (event.target.id === 'car-names-submit') {
      this.submitHandler.handleCarNames();
    }

    if (event.target.id === 'racing-count-submit') {
      this.submitHandler.handleRacingCount();
    }
  }
}
