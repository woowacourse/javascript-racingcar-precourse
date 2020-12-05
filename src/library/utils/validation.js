export const hasEmptyElement = elements => {
  for (const element of elements) {
    if (element.length === 0) {
      return true;
    }
  }

  return false;
};

export const hasDuplicateElement = elements => {
  let result = false;
  elements.forEach((element, idx) => {
    if (elements.lastIndexOf(element) !== idx) {
      result = true;
    }
  });

  return result;
};

export const hasElementMoreThan5Letters = elements => {
  for (const elemnet of elements) {
    if (elemnet.length > 5) {
      return true;
    }
  }

  return false;
};
