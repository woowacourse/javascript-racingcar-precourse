describe("구현 결과가 요구사항과 일치해야 한다.", () => {
  const baseUrl = "../index.html";
  const SELECTOR = {
    CAR_NAMES_INPUT: "#car-names-input",
    CAR_NAMES_SUBMIT_BUTTON: "#car-names-submit",
    RACING_COUNT_INPUT: "#racing-count-input",
    RACING_COUNT_SUBMIT_BUTTON: "#racing-count-submit",
    WINNERS: "#racing-winners",
  };

  before(() => {
    Cypress.Commands.add("stubRandomReturns", (returnValues = []) => {
      const randomStub = cy.stub();

      returnValues.forEach((value, index) => {
        randomStub.onCall(index).returns(value);
      });

      cy.visit(baseUrl, {
        onBeforeLoad: (window) => {
          window.MissionUtils = {
            Random: {
              pickNumberInRange: randomStub,
            },
          };
        },
      });
    });
  });

  beforeEach(() => {
    cy.stubRandomReturns([5, 1]);
  });

  it("게임을 완료하고 우승자를 확인할 수 있어야 한다.", () => {
    // given
    const carNames = "poco,park";
    const winner = "poco";
    const racingCount = 1;

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(carNames);
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).click();
    cy.get(SELECTOR.RACING_COUNT_INPUT).type(racingCount);
    cy.get(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).click();

    // then
    cy.get(SELECTOR.WINNERS).should("have.text", winner);
  });

  it("잘못된 자동차 이름을 입력한 경우 alert이 호출되어야 한다.", () => {
    // given
    const alertStub = cy.stub();
    const invalidInput = "makerjun";

    cy.on("window:alert", alertStub);

    // when
    cy.get(SELECTOR.CAR_NAMES_INPUT).type(invalidInput);

    // then
    cy.get(SELECTOR.CAR_NAMES_SUBMIT_BUTTON)
      .click()
      .then(() => {
        expect(alertStub).to.be.called;
      });
  });
});
