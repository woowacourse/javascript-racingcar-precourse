export default function RacingCarGame() {	
  function isSpecialCharacter(carNamesInput) {
    const specialCharacter = /[^가-힣ㄱ-하-ㅣa-zA-z0-9,]/;
    return specialCharacter.test(carNamesInput);
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

  function init() {
    getCarNamesInput();
  }

  init();
}

new RacingCarGame();