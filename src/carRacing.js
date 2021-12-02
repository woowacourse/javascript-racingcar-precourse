import Car from './car.js';
export default function carRacing(Carnames,count){
  
  const carList=Carnames.map(name=>new Car(name));
  let carResult="";
  for(let i=0;i<count;i++){
    carList.forEach(carName => {
      const randomNum=MissionUtils.Random.pickNumberInRange(1, 9);
      if(randomNum>=4){
        carName.count+=1;
      }
      
      carResult+=`${carName.name}:${'-'.repeat(carName.count)}<br> `;
      console.log(carResult);
    });
    carResult+=`<br>`
    
  };
  console.log(carList);
  const winner=getWinner(carList);
  carResult+=`<span>최종 우승자: </span>`
  carResult+=`<span id="racing-winners">${winner}</span>`;

  function getWinner(cars){
    console.log(cars)
    let winner=[];
    const maxcount=[];
    cars.forEach(car=>{
      maxcount.push(car.count)
    })
    const maxlength=Math.max(...maxcount);
    
    cars.forEach(car=>{
      if (car.count==maxlength){
        winner.push(car.name);
      }
    })
    console.log(maxlength);
    console.log(winner);
    const message=winner.join(', ');
    return message;
  }
  return carResult;




}