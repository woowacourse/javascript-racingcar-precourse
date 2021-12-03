class Form {
  constructor(inputId, buttonId) {
    this.input = document.getElementById(inputId);
    this.button = document.getElementById(buttonId);
  }

  getInputValue() {
    return this.input.value;
  }

  setButtonAction(action) {
    this.button.dataset.action = action;
  }
}

export default Form;
