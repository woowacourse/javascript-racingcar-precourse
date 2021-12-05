export const showErrorMessage = ($target, errorMessage) => {
  alert(errorMessage);
  $target.value = '';
  $target.focus();
};

export const showElement = ($target) => {
  $target.style.display = 'block';
};

export const hideElement = ($target) => {
  $target.style.display = 'none';
};
