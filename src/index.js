import CarList from "./car/CarList.js";

const formTag = document.querySelectorAll("form");
const carNameButton = document.getElementById("car-names-submit");
const racingCountButton = document.getElementById("racing-count-submit");
const carList = new CarList();

for(let i = 0; i<formTag.length; i++) {
    formTag[i].addEventListener('submit', (event) => {
        event.preventDefault();
    })
}

carNameButton.addEventListener('click', event => {
    const carNameInput = document.getElementById("car-names-input").value;
    const carNameArray = carNameInput.split(",");

    carList.init(carNameArray);
    console.log(carNameInput);
});

racingCountButton.addEventListener('click', event => {
    const racingCountInput = document.getElementById("racing-count-input").value;

    carList.game(racingCountInput);
    console.log(carList);
});
