const customError = ({ errorMessage, errorCallback }) => {
  console.error(new Error(errorMessage));
  window.alert(errorMessage);
  errorCallback();
};

export default customError;
