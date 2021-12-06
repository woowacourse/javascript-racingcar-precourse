export default class Form {
  constructor(ID) {
    this.input = document.querySelector(`#${ID}-input`);
    this.submitButton = document.querySelector(`#${ID}-submit`);
  }

  addClickEvent(onSubmitHandler) {
    this.submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      onSubmitHandler(this.input);
    });
  }
}
