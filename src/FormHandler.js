export default class FormHandler {
  constructor(inputId, buttonId) {
    this.input = document.querySelector(inputId);
    this.button = document.querySelector(buttonId);

    this.input.addEventListener('keyup', this.setValue);
  }

  setValue = () => {
    this.value = this.input.value;
  };

  setOnClick = (onClick) => {
    this.button.addEventListener('click', onClick);
  };

  clearInput() {
    this.input.value = '';
  }
}
