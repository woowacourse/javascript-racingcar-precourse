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
  function getWinner(cars){
    console.log(cars)
    let winnerList=[];
    const lengthList=[];
    cars.forEach(car=>{
      lengthList.push(car.count)
    })
    const maxlength=Math.max(...lengthList);
    cars.forEach(car=>{
      if (car.count==maxlength){
        winnerList.push(car.name);
      }
    })
    const winners=winnerList.join(', ');
    return winners;
  }
  const winner=getWinner(carList);
  carResult+=`<span>최종 우승자: </span>`;
  carResult+=`<span id="racing-winners">${winner}</span>`;
  return carResult;
}