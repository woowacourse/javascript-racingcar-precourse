const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => acc.mockImplementationOnce((_, callback) => {
    callback(input);
  }), MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

const getOutput = (logSpy) => [...logSpy.mock.calls].join('');

const expectLogContains = (received, logs) => {
  logs.forEach((log) => {
    expect(received).toEqual(expect.stringContaining(log));
  });
};

describe('자동차 경주 게임 전체적인 프로세스 테스트', () => {
  test('3개의 차가 경주를 할 경우 제일 많이 움직힌 사람이 최종 우승자가 된다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['4', '5', '6', '2', '3', '4', '2', '3', '5']);
    mockQuestions(['a,b,c', '3']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '실행 결과',
      '',
      'a: -',
      'b: -',
      'c: -',
      '',
      'a: -',
      'b: -',
      'c: --',
      '',
      'a: -',
      'b: -',
      'c: ---',
      '',
      '최종 우승자: c',
    ]);
  });
  test('3개의 차가 경주를 할 경우 제일 많이 움직힌 사람들이 최종 우승자가 된다.', () => {
    const logSpy = getLogSpy();
    mockRandoms(['4', '5', '6', '2', '6', '4', '2', '6', '5']);
    mockQuestions(['a,b,c', '3']);

    const app = new App();
    app.play();

    const log = getOutput(logSpy);
    expectLogContains(log, [
      '실행 결과',
      '',
      'a: -',
      'b: -',
      'c: -',
      '',
      'a: -',
      'b: -',
      'c: --',
      '',
      'a: -',
      'b: --',
      'c: ---',
      '',
      '최종 우승자: b, c',
    ]);
  });
});
