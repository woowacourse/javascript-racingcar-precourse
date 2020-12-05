/**
 * HTML로 출력을 관리하는 클래스
 * 기능 구현 목록 - 출력 부분을 담당
 */
// TODO: 아예 모듈화를 더해서 printContainer를 객체마다 넣을수있나? 굳이 그럴필욘없지?
export default class Printer {
  static printOneRoundResult(printContainer, carList) {
    const carGameResultContainer = printContainer;
    const oneRoundResultDiv = document.createElement('div');
    carList.forEach(car => {
      oneRoundResultDiv.innerHTML += `
      ${car.getName()}: ${'-'.repeat(car.getPosition())} <br/>`;
    });
    oneRoundResultDiv.innerHTML += '<br/>';
    carGameResultContainer.appendChild(oneRoundResultDiv);
  }

  static printWinner(printContainer, carList) {
    const carGameResultContainer = printContainer;
    const winnerResultDiv = document.createElement('div');
    const winPosition = Math.max(...carList.map(car => car.getPosition()));
    const winners = carList
      .filter(car => car.getPosition() === winPosition)
      .map(car => car.getName());
    winnerResultDiv.innerHTML = `최종 우승자: ${winners.join(', ')}`;
    carGameResultContainer.appendChild(winnerResultDiv);
  }

  static initCarGameResultContainer(resultContainer) {
    let carGameResultContainer = resultContainer;
    if (!carGameResultContainer) {
      carGameResultContainer = document.querySelector(
        '#car-game-result-container',
      );
    }
    carGameResultContainer.innerHTML = '<h4>📄 실행 결과</h4>';
  }
}
