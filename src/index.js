import CarList from "./car/CarList.js";

const formTag = document.querySelectorAll("form");
const carNameInput = document.getElementById("car-names-input");
const carNameButton = document.getElementById("car-names-submit");
const carNameArray = carNameInput.innerText.split(",");

for(let i = 0; i<formTag.length; i++) {
    formTag[i].addEventListener('submit', (event) => {
        event.preventDefault()
    })
}

const carList = new CarList();

carNameButton.addEventListener('click', event => {
    carList.init(carNameArray);
    console.log(carList);
});
