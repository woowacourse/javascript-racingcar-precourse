export default function RacingCarGame() {	
  function isSpecialCharacter(carNamesInput) {
    const rSpecialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
    return rSpecialCharacter.test(carNamesInput);
  }

  function isAvailableLength(carNamesInput) {
    const splitCarNamesInput = carNamesInput.split(",");
    const availableLength = 5;
    const arrayLength = splitCarNamesInput.length;
    let i = 0;

    for (i; i < arrayLength; i++) {
      if (splitCarNamesInput[i].length > availableLength) {
        return false;
      }
    }

    return true;
  }

  function getCarNamesInput() {
    const carNamesSubmit = document.querySelector("#car-names-submit");
    carNamesSubmit.addEventListener("click", () => {
      const carNamesInput = document.querySelector("#car-names-input").value;

      if (isSpecialCharacter(carNamesInput) === false && isAvailableLength(carNamesInput) === true) {
        return carNamesInput;
      } else {
        alert("5자 이하의 문자를, 공백 없이, 콤마로 구분하여 입력해 주세요.");
      }			
    }); 
  }

  function getRacingCountInput() {
    const racingCountSubmit = document.querySelector("#racing-count-submit");
    racingCountSubmit.addEventListener("click", () => {
      const racingCountInput = document.querySelector("#racing-count-input").value;
      return racingCountInput;
    });
  }

  function createRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }

  function init() {
    getCarNamesInput();
    getRacingCountInput();
    createRandomNumber();
  }

  init();
}

new RacingCarGame();