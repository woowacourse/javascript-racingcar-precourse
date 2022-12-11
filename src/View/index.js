const { Console } = require('@woowacourse/mission-utils');
const { INPUT_MESSAGE, RESULT_MESSAGE } = require('../lib/constants/message');
const { roundFormatter } = require('../lib/utils/formatter');

const input = {
  readLine: (message, callback) => {
    Console.readLine(`${message}\n`, callback);
  },
};

const output = {
  print: (message) => {
    Console.print(`${message}\n`);
  },
  close: () => {
    Console.close();
  },
};

class View {
  constructor() {
    this.input = input;
    this.output = output;
  }

  readCarName(callback) {
    this.input.readLine(INPUT_MESSAGE.name, callback);
  }

  readCount(callback) {
    this.input.readLine(INPUT_MESSAGE.count, callback);
  }

  printResult({ process, winner }) {
    this.output.print(RESULT_MESSAGE.result);
    process.forEach((round) => {
      this.output.print(roundFormatter(round));
    });
    this.output.print(RESULT_MESSAGE.winner(winner));
  }

  printError(message) {
    this.output.print(message);
  }

  close() {
    this.output.close();
  }
}

module.exports = View;
