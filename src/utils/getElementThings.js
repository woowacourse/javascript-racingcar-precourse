const getValueById = elementId => {
  const $element = document.getElementById(elementId);

  return $element.value;
};

export { getValueById };
