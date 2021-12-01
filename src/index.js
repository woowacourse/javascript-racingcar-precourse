


export default function racingGame(){
  const carNameInput=document.querySelector('#car-names-input');
  const carNameSubmitBtn=document.querySelector('#car-names-submit');
  const racingCountInput=document.querySelector('#racing-count-input');
  const racingCountSubmitBtn=document.querySelector('#racing-count-submit');
  
  function Car(name) {
    this.name = name;
    this.count=0;
  }
  function makeinstance(){
    let listValue=carNameInput.value.split(',');
    let carList=listValue.map(name=>new Car(name));
    let carResult="";
    console.log(listValue);
    carList.forEach(carName => {
      carName.count+=1;
      carResult+=`${carName.name}:${'-'.repeat(carName.count)}<br> `;
      console.log(carName.name);
      console.log(carName.count);
      console.log(carResult);
      
    });
    
     
  }
  carNameSubmitBtn.addEventListener("click",()=>{
    makeinstance();
   })
}

new racingGame();