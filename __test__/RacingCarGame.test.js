import { Car } from "../src/Car.js";
import {
  getRandomNumber,
  isValidCarNamesInput,
  isValidRacingCount,
  getWinners
} from "../src/util.js";

describe("사용자가 입력한 자동차의 이름을 검증한다", () => {
  test("자동차 이름은 5자 이하여야 한다.", () => {
    expect(isValidCarNamesInput("east,west")).toBe(true);
    expect(isValidCarNamesInput("east,westjackson")).toBe(false);
  });

  test("자동차 이름은 공백문자를 포함하고 있지 않아야 한다.", () => {
    expect(isValidCarNamesInput(",js,3")).toBe(false);
  });

  test("자동차 이름은 중복되어서는 안된다", () => {
    expect(isValidCarNamesInput("abc,abc")).toBe(false);
  });

  test("자동차 이름은 콤마로 구분되며, 2개 이상의 자동차 이름으로 구성되어야 한다.", () => {
    expect(isValidCarNamesInput("east,west")).toBe(true);
    expect(isValidCarNamesInput("southjackson")).toBe(false);
  });
});

describe("사용자가 입력한 시도할 횟수를 검증한다", () => {
  test("시도할 횟수는 0보다 큰 정수이다(자연수이다)", () => {
    expect(isValidRacingCount(1)).toBe(true);
    expect(isValidRacingCount(2e5)).toBe(true);
    expect(isValidRacingCount(7.0)).toBe(true);
    expect(isValidRacingCount(0.3)).toBe(false);
    expect(isValidRacingCount(-52)).toBe(false);
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

describe("최종 우승자를 선택한다", () => {
  test("가장 많이 전진해있는 자동차의 배열을 반환한다", () => {
    const winner = new Car("1");
    const car2 = new Car("2");
    const car3 = new Car("3");
  
    winner.position = 100;
    expect(getWinners([winner, car2, car3])).toEqual([winner]);
  });

  test("가장 많이 전진해있는 자동차가 2개 이상일 경우 모두 반환한다", () => {
    const winner1 = new Car("1");
    const winner2 = new Car("2");
    const car3 = new Car("3");
  
    winner1.position = 100;
    winner2.position = 100;

    expect(getWinners([winner1, winner2, car3])).toEqual([winner1, winner2]);
  });
});