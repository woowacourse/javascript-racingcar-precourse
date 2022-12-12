const { Console } = require('@woowacourse/mission-utils');
const {OUTPUT_MESSAGE} = require("../Constants/view")

const NL = '\n'

const OutputView = {

  printError({ message, name, cause }) {
    Console.print(OUTPUT_MESSAGE.error(message, name, cause));
  },

  printResult({total, winner}) {
    Console.print(NL + OUTPUT_MESSAGE.result_start + NL)
    this.multiplePrints(total)
    Console.print(OUTPUT_MESSAGE.winner(winner));
    Console.close()
  },

  multiplePrints(total) {
    total.forEach((result) => {
        this.for(result)
        Console.print(NL)
    })
  },

  for(result) {
    for (let car in result){
        Console.print(`${car}: ${result[car]}`);
    }
  }

};

module.exports = OutputView;