// 여기에 테스트 코드 작성
const App = require('../src/App');
const MissionUtils = require('@woowacourse/mission-utils');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 테스트", () => {
  test("기능 테스트", () => {
    mockRandoms([4, 1, 2, 5, 8, 9]);
    mockQuestions(['철수, 민수, 영희', '2']);

    const logs = [
      "실행 결과",
      "철수: ",
      "민수: -",
      "영희: -",
      "",
      "철수: -",
      "민수: --",
      "영희: --",
      "",
      "최종 우승자: 민수, 영희",
    ];
    const logSpy = getLogSpy();
    const app = new App();
    app.play();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  })
});
