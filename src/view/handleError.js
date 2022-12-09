const { print } = require('./OutputView');

const handleError = (tryFn, catchFn) => {
  try {
    tryFn();
  } catch (error) {
    print(error.message);
    catchFn();
  }
};

module.exports = handleError;
