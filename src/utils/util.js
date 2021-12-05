export const showErrorMessage = ($target, errorMessage) => {
  alert(errorMessage);
  $target.value = '';
  $target.focus();
};
