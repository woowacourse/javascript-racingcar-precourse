import CarList from "./car/CarList.js";

const formTag = document.querySelectorAll("form");
const carNameInput = document.getElementById("car-names-input");
const carNameButton = document.getElementById("car-names-submit");
const racingCountInput = document.getElementById("racing-count-input");
const racingCountButton = document.getElementById("racing-count-submit");
const carNameArray = carNameInput.innerText.split(",");
const carList = new CarList();

for(let i = 0; i<formTag.length; i++) {
    formTag[i].addEventListener('submit', (event) => {
        event.preventDefault();
    })
}

carNameButton.addEventListener('click', event => {
    carList.init(carNameArray);
    console.log(carList);
});

racingCountButton.addEventListener('click', event => {
    carList.game(racingCountInput);
    console.log(carList);
});
