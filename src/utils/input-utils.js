export default function getUserInputValue(elementId) {
  const inputValue = document.getElementById(elementId).value;

  return inputValue;
}

export function clearInput(inputId) {
  document.getElementById(inputId).value = "";
}
