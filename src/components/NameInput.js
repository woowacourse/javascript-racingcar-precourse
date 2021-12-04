class NameInput {
  constructor($nameInput) {
    this.$nameInput = $nameInput;
    this.selectDom();
    this.addEvent();
  }

  selectDom() {
    this.$nameForm = this.$nameInput.parentElement;
  }
  addEvent() {
    this.$nameForm.addEventListener('submit', this.submitName.bind(this));
  }
  submitName(e) {
    e.preventDefault();
    console.log(this.$nameInput.value);
  }
}

export default NameInput;
