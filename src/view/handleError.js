const { print } = require('./OutputView');

const handleError = (tryFn, catchFn) => {
  try {
    tryFn();
  } catch (error) {
    print(error);
    catchFn();
  }
};

module.exports = handleError;
