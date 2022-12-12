const { Console } = require('@woowacourse/mission-utils');

const OUTPUT_MESSAGE = {
    error: (message, name, cause) => `${name} : ${message}\n[CAUSE] : ${cause}`,
  };

const OutputView = {
  print(input) {
    Console.print(input);
  },
  printError({ message, name, cause }) {
    Console.print(OUTPUT_MESSAGE.error(message, name, cause));
  },
};

module.exports = OutputView;