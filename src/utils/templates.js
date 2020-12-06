export const resultTitleHTML = () => `<h4>📄 실행 결과</h4>`;

export const playerHTML = (name, step) =>
  `<span>${name} : ${"-".repeat(step)}</span><br/>`;

export const winnerHTML = winnerList => `
  <p>최종 우승자: ${winnerList.join(",")}</p>
`;
