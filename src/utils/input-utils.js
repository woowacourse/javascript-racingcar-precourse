export function getUserInputValue(elementId) {
  const inputValue = document.getElementById(elementId).value;

  return inputValue;
}

export function clearInput(elementToClear) {
  if (elementToClear) {
    elementToClear.value = "";
  }
}
