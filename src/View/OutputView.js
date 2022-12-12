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

  printResult({total, winner}) {
    Console.print('\n실행 결과\n')
    this.multiplePrints(total)
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
    Console.close()
  },

  multiplePrints(total) {
    total.forEach((result) => {
        this.for(result)
        Console.print('\n')
    })
  },

  for(result) {
    for (let car in result){
        Console.print(`${car}: ${result[car]}`);
    }
  }

};

module.exports = OutputView;