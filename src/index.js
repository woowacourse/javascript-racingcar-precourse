document.querySelector('form > input[type="text"]').id = 'car-names-input';
document.querySelector('form > input[type="text"] + button').id = 'car-names-submit';

let carNamesSubmit = document.getElementById('car-names-submit');
carNamesSubmit.addEventListener('click', e =>{
    e.preventDefault();
    let userInput = document.getElementById('car-names-input').value;
    
    console.log(userInput);
});