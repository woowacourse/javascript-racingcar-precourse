export const hideElement = element => {
  element.style.display = "none";
};

export const showElement = element => {
  element.style.display = "block";
};

export const showInputError = ($input, message) => {
  alert(message);
  $input.value = "";
};

export const blockContainer = ($input, $button) => {
  $input.value = "";
  $input.disabled = true;
  $button.disabled = true;
};
