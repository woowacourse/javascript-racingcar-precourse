import carRacing from './carRacing.js';
import validateCarName from './validateCarName.js';
import validateUserCount from './validateUserCount.js';


export default function racingGame(){
  const carNameInput=document.querySelector('#car-names-input');
  const carNameSubmitBtn=document.querySelector('#car-names-submit');
  const racingCountInput=document.querySelector('#racing-count-input');
  const racingCountSubmitBtn=document.querySelector('#racing-count-submit');
  const resultBox= document.querySelector('#app');
  
  //
  function printRacing(names,count){
    if (names!=undefined){
      const carResult=carRacing(names,count);
      const racingResult=document.createElement('div');
      racingResult.innerHTML=`${carResult}`;
      resultBox.appendChild(racingResult);
    }
    
  }
  

  
  //car이름 배열 주기
   function submitCarName(){
    const carInput=carNameInput.value;
    const listValue=validateCarName(carInput);
    console.log(listValue);
    return listValue;
   }
   //count횟수 주기
   function submitCount(){
    const countInput=validateUserCount();
    return countInput;
   }
   carNameSubmitBtn.addEventListener("click",()=>{
    validateCarName();
   })
   racingCountSubmitBtn.addEventListener("click",()=>{
    const names=  submitCarName();
    const count=  submitCount();
    if (count>0){
    printRacing(names,count);
    }
   })
}

new racingGame();