export const $ = (selector) => document.querySelector(selector);

export const alertError = (message, $element) => {
  $element.value = '';
  alert(message);
  $element.focus();
};

export const hideRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

export const showRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'block';
  $('#racing-count-form').style.display = 'block';
  $('#racing-count-input').focus();
};

export const validateNames = (currentInput) => {
  const names = currentInput.split(',').map((item) => item.trim());
  if (names.length === 1) {
    return false;
  }
  for (let i = 0; i < names.length; i++) {
    if (names[i].length === 0 || names[i].length > 5) {
      return false;
    }
  }
  return true;
};

export const validateCount = (parsedInput) => {
  if (parsedInput <= 0) {
    return false;
  }
  if (isNaN(parsedInput)) {
    return false;
  }
  return true;
};
