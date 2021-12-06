export function displayWinnerHTML(winners){
    const racingWinners = document.getElementById('racing-winners');
    const preWinnerText = document.createElement('span');
    preWinnerText.innerHTML = '최종 우승자: '
    
    racingWinners.before(preWinnerText);

    let winnersText = ''; 
    for(let i=0; i<winners.length; i++){
        winnersText += `${winners[i]}, `;
    }
    
    winnersText = winnersText.slice(0,-2);
    racingWinners.innerHTML = winnersText;
}

export function displayCurrentHTML(currentPositions){
    let racingCurrent = document.getElementById('racing-current');
    racingCurrent.innerHTML += currentPositions + "<br>";
}