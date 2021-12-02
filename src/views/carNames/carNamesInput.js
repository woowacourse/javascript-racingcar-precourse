const resetCarNamesInput = () => {
  const $carNamesInput = document.getElementById("car-names-input");

  $carNamesInput.value = "";
};

const lockCarNamesInput = () => {
  const $carNamesInput = document.getElementById("car-names-input");

  $carNamesInput.readOnly = true;
};

export { resetCarNamesInput, lockCarNamesInput };
