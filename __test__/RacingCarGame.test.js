import { RacingCarGame } from "../src/RacingCarGame.js";
import { getRandomNumber } from "../src/util.js";

jest.spyOn(document, "querySelector").mockReturnValue(document.documentElement);

describe("사용자가 입력한 자동차의 이름을 검증한다", () => {

  const racingCarGame = new RacingCarGame();
  test("자동차 이름은 5자 이하여야 한다.", () => {
    expect(racingCarGame.isValidCarNamesInput("east,west")).toBe(true);

    expect(racingCarGame.isValidCarNamesInput("east,westjackson")).toBe(false);
  });

  test("자동차 이름은 콤마로 구분되며, 2개 이상의 자동차 이름으로 구성되어야 한다.", () => {
    expect(racingCarGame.isValidCarNamesInput("east,west")).toBe(true);

    expect(racingCarGame.isValidCarNamesInput("southjackson")).toBe(false);
  });
});

describe("사용자가 입력한 시도할 횟수를 검증한다", () => {
  const racingCarGame = new RacingCarGame();

  test("시도할 횟수는 0보다 큰 정수이다(자연수이다)", () => {
    expect(racingCarGame.isValidRacingCount(1)).toBe(true);
    expect(racingCarGame.isValidRacingCount(2e5)).toBe(true);
    expect(racingCarGame.isValidRacingCount(0.3)).toBe(false);
    expect(racingCarGame.isValidRacingCount(-52)).toBe(false);
    expect(racingCarGame.isValidRacingCount(7.0)).toBe(true);
  });
});

describe("자동차의 전진조건을 검증한다.", () => {  
  test("0에서 9 사이에서 random 값을 구한다", () => {
    const TEST_CASES = 1000;
    const MIN = 0;
    const MAX = 9;
    
    for (let i = 0; i < TEST_CASES; i++) {
      const randomNumber = getRandomNumber(MIN, MAX);

      expect(Number.isInteger(randomNumber)).toBe(true);
      expect(randomNumber).toBeGreaterThanOrEqual(MIN);
      expect(randomNumber).toBeLessThanOrEqual(MAX);
    }
  });
});