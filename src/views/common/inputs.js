const resetValueById = elementId => {
  const $element = document.getElementById(elementId);

  $element.value = "";
};

const lockInputById = elementId => {
  const $element = document.getElementById(elementId);

  $element.readOnly = true;
};

export { resetValueById, lockInputById };
