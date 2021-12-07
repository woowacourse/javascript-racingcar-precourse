import CarList from "./car/CarList.js";
import isValidate from "./utils/isValidate.js";

const formTag = document.querySelectorAll("form");
const carNameInput = document.getElementById("car-names-input");
const carNameButton = document.getElementById("car-names-submit");
const racingCountInput = document.getElementById("racing-count-input");
const racingCountButton = document.getElementById("racing-count-submit");
const carNameArray = carNameInput.innerText.split(",");

for (let i = 0; i < formTag.length; i++) {
  formTag[i].addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

const carList = new CarList();

carNameButton.addEventListener("click", () => {
  carList.init(carNameArray);
  console.log(carNameInput.value);
});

racingCountButton.addEventListener("click", () => {
  console.log(racingCountInput.value);
  if (!isValidate("count", racingCountInput))
    alert("잘못된 숫자를 입력하셨습니다.");
  else {
    carList.game(racingCountInput);
    console.log(carList);
  }
});
