// DOM
const app = document.querySelector("#app");
const carNameInput = document.querySelector("#car-names-input");
const countInput = document.querySelector("#racing-count-input");

app.addEventListener("click", function(e) {
    e.preventDefault();
    
    if(e.target.id === "car-names-submit") {
        console.log(carNameInput.value);
    }
    else if(e.target.id === "racing-count-submit") {
        console.log(countInput.value);
    }
});
