import Car from './car.js';


export default function racingGame(){
  const carNameInput=document.querySelector('#car-names-input');
  const carNameSubmitBtn=document.querySelector('#car-names-submit');
  const racingCountInput=document.querySelector('#racing-count-input');
  const racingCountSubmitBtn=document.querySelector('#racing-count-submit');
  const resultBox= document.querySelector('#app');
  

  function makeinstance(){
    let listValue=carNameInput.value.split(',');
    let carList=listValue.map(name=>new Car(name));
    let carResult="";
    console.log(listValue);
    carList.forEach(carName => {
      carName.count+=MissionUtils.Random.pickNumberInRange(1, 9);
      carResult+=`${carName.name}:${'-'.repeat(carName.count)}<br> `;
      console.log(carName.name);
      console.log(carName.count);
      console.log(carResult);
      
    });
    const racingResult=document.createElement('div');
    racingResult.innerHTML=`${carResult}`;
    console.log(carResult);
    console.log(racingResult.innerHTML);
    resultBox.appendChild(racingResult);
     
  }
  carNameSubmitBtn.addEventListener("click",()=>{
    makeinstance();
   })
}

new racingGame();