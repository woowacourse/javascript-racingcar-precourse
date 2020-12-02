export default class RacingCarGame {
  constructor() {
    this.selectDOM();
    this.addEventListener();
  }

  selectDOM() {
    this.$nameInput = document.querySelector("input[type=text]");
    this.$nameButton = document.querySelectorAll("button")[0];
    this.$numberInput = document.querySelector("input[type=number]");
    this.$numberButton = document.querySelectorAll("button")[1];
  }

  addEventListener() {
    this.$nameButton.addEventListener('click', () => this.getInput());
    this.$nameInput.addEventListener('keypress', (e) => {
      if (e.keyCode === 13)
        this.getInput();
    })
  }

  getCarNames() {
    const userNameInput = this.$nameInput.value;
    const carNames = userNameInput.split(',');
    console.log(carNames);
  }
  
}

new RacingCarGame();