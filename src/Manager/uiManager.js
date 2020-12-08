function initHTML() {
  document.getElementsByTagName("input")[0].id = "car-names-input";
  document.getElementsByTagName("input")[1].id = "racing-count-input";
  document.getElementsByTagName("button")[1].id = "racing-count-submit";
  document.getElementsByTagName("button")[1].parentNode.id = "count-submit-form";
  document.getElementsByTagName("h4")[1].id = "result-head";
  document.getElementsByTagName("h4")[1].parentNode.id = "print-result-form";
  document.getElementsByTagName("button")[0].id = "car-names-submit";
}

function hideForms() {
  document.getElementById("count-submit-form").style.visibility = "hidden";
  document.getElementById("print-result-form").style.visibility = "hidden";
}

function showCountSubmitForm() {
  document.getElementById("count-submit-form").style.visibility = "visible";
}

function showResultForm() {
  document.getElementById("print-result-form").style.visibility = "visible";
}

export { initHTML, hideForms, showCountSubmitForm, showResultForm };
