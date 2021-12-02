const sortCarsByMove = carObjectList => carObjectList.sort((a, b) => b.move - a.move);

const getWinners = carObjectList => {
  const sortedCarObjectList = sortCarsByMove(carObjectList);
  const winnersMove = sortedCarObjectList[0].move;

  return sortedCarObjectList.filter(x => x.move === winnersMove);
};

export default function showWinners(carObjectList) {
  const winnersObjectList = getWinners(carObjectList);
  console.log(winnersObjectList);
}
