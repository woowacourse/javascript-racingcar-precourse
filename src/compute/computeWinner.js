export default function ComputeWinner(carList){
  let winners = [];
  let winnerCount = 0;
  carList.forEach(element => {
    if (winnerCount < element.count) {
      winnerCount = element.count;
      winners = [element.name];
    }
    else if (winnerCount === element.count) {
      winners.push(element.name);
    }
  });
  return winners;
}