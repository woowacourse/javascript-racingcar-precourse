// functions
function isCorrectCarName(carNameInputValue) {
    const wrongNames = carNameInputValue
        .split(',')
        .filter(name => name.length > 5);
    if(!wrongNames.length) return true;
    else return false;
}

function isCorrectCount(countInputValue) {
    return Number.isInteger(Number(countInputValue)) && countInputValue >= 1;
}

// DOM
const app = document.querySelector("#app");
const carNameInput = document.querySelector("#car-names-input");
const countInput = document.querySelector("#racing-count-input");

app.addEventListener("click", function(e) {
    e.preventDefault();
    
    if(e.target.id === "car-names-submit") {
        if(isCorrectCarName(carNameInput.value)) console.log(carNameInput.value);
    }
    else if(e.target.id === "racing-count-submit") {
        if(isCorrectCount(countInput.value)) {
            console.log(countInput.value);
        }
    }
});
