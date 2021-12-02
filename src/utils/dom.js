export const $ = (selector, target = document) =>
  target.querySelector(selector);

export const disableInput = input => {
  input.disabled = true;
};

export const enableInput = input => {
  input.disabled = false;
};

export const focusInput = input => input.focus();
