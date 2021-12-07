export const showError = (error) => {
  alert(error.message);
};

export const throwError = (message) => {
  throw new Error(message);
};
