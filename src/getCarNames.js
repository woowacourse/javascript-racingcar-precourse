export function getCarNames($carNameInput){
    const carNames = $carNameInput.value.split(',').map((car) => car.trim());
    console.log(carNames);  
    return carNames      
}