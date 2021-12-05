# 자동차 경주 게임

## 구현할 기능 목록

- 자동차 이름을 입력하고 확인 버튼을 클릭하면 개수만큼 자동차 인스턴스 생성

1. 잘못된 입력 값 작성한 경우 alert를 이용해 메시지 보여줘야 함

<br />
<br />

- 게임 클래스 작성

start function

1. 시도 횟수 입력 시 게임 실행
2. pickNumberInRange를 사용해 무작위 값이 4 이상일 경우 객체의 전진 횟수 증가
3. 시도 회수 만큼 순회하며 렌더 함수 호출
4. 모두 순회 후 우승자 렌더링 함수 호출

renderResult function

1. html 요소를 건드리지 않아야 했기에, createElement, appendChild 함수 사용해서 구현

renderWinner function

1. span 요소를 생성하고, setAttribute 메서드를 사용해서 요구사항을 해결하였다.
