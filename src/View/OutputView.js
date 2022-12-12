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
    Console.print('실행 결과\n')
    total.forEach((result) => {
        for (let car in result){
            Console.print(`${car}: ${result[car]}`);
        }
        Console.print('\n')
    })
    Console.print(`최종 우승자 : ${winner.join(", ")}`);
  }
};

module.exports = OutputView;