export default class Form {
  constructor(inputId, submitId) {
    this.$input = document.getElementById(inputId);
    this.$submit = document.getElementById(submitId);
  }

  addSubmitClickEventHandler(handler) {
    this.$submit.addEventListener('click', handler);
  }

  handleException(checkingResults, errorObject) {
    const errorCode = checkingResults.indexOf(false);
    const errorMessage = errorObject[errorCode];

    alert(errorMessage);
    this.$input.focus();
  }
}
