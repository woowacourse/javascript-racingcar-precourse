export function Car(name) {
  this.name = name;
  this.location = 0;
  this.setLocation = (nextLocation) => {
    this.location = nextLocation;
  };
}
export const carInput = document.getElementById("car-names-input");
export const iteratorInput = document.getElementById("racing-count-input");

export const iterateBy = ({ iterator, callbacks }) => {
  for (let i = 0; i < iterator; i++) {
    callbacks.forEach((callback) => callback(i));
  }
};
export const splitNamesByComma = (carNames) =>
  carNames
    .split("")
    .filter((f) => f !== " ") // 공백 없애기
    .join("")
    .split(",") // 컴마 기준으로 잘라서 배열 생성
    .filter((f) => f !== ""); // ,, 이렇게 컴마 사이에 값 없는 경우와 맨 앞, 맨 뒤에 컴마 있을 경우 처리
