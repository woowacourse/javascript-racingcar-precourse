class Form {
  constructor({ formId, inputId, buttonId }) {
    this.form = document.getElementById(formId);
    this.input = document.getElementById(inputId);
    this.button = document.getElementById(buttonId);
  }

  getInputValue() {
    return this.input.value;
  }

  initInputValue() {
    this.input.value = '';
    this.input.focus();
  }

  setButtonAction(action) {
    this.button.dataset.action = action;
  }

  setButtonText(text) {
    this.button.innerText = text;
  }
}

export default Form;
