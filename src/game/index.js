export default class CarGame {

    isValid(input){
        let cars = input.split(',');
        for(let i=0; i<cars.length; i++){
            if(cars[i].length > 5){
                return false;
            }
        }

        return true;
    }
}