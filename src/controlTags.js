export function hideTags() {
  document.querySelector(".car-game-container").childNodes[3].style.visibility =
    "hidden";
  //시도 횟수 태그 숨기기
  document.querySelector("#app").childNodes[7].style.visibility = "hidden";
  //결과 태그 숨기기
}

export function showCountTags() {
  document.querySelector(".car-game-container").childNodes[3].style.visibility =
    "visible";
}

export function clearResultDiv() {
  const resultDiv = document.querySelector("#app").childNodes[7];
  let raceResult = document.querySelector("#resultRaceDiv");
  //경주 게임 결과를 담는 태그
  if (raceResult != null) {
    //버튼을 여러번 누르거나 ,게임 재시작을 위한 셋팅
    resultDiv.removeChild(raceResult);
  }
  raceResult = document.createElement("div");
  raceResult.setAttribute("id", "resultRaceDiv");
  resultDiv.appendChild(raceResult);
}

export function showResultTags() {
  document.querySelector("#app").childNodes[7].style.visibility = "visible";
}
