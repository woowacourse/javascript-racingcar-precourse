import RacingCarGame from "../src/index.js";

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