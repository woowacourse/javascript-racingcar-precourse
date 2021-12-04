import { getWinner } from './getWinner.js';

//재시작
function restart() {
    const body = document.querySelector('body');
    body.addEventListener('click', ({ target }) => {
        if (target.id === 'game-reset-button') {
            location.reload();
        }
    })
}

export function getGameResult(CARS) {
    //승자 구하기
    let winner = getWinner(CARS);
    console.log(winner);
    winner = winner.join(',');

    //승자 출력
    document.querySelector('body').innerHTML += `<span id="racing-winners">
                                                    <p>최종 우승자 : ${winner}</p>
                                                    <button id='game-reset-button'>재시작</button>
                                                </span>`;

    restart();
}
