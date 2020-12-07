export const getCarHTML = (name, distance) => {
  return `<span>${name}: ${"-".repeat(distance)}</span><br/>`;
};

export const getWinnerHTML = (names) => {
  return `<p>최종 우승자: ${names.join(",")}</p>`;
};

export const getHeaderHTML = () => {
  return `<h4>📄 실행 결과</h4>`;
};
