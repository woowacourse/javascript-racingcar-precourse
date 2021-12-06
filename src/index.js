// DOM
const app = document.querySelector("#app");
const carNameInput = document.querySelector("#car-names-input");

app.addEventListener("click", function(e) {
    e.preventDefault();
    
    if(e.target.id === "car-names-submit") {
        console.log(carNameInput.value);
    }
});
