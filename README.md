<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

---

## 🎯 기능 요구사항

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

<br>

## 📌 구현할 기능 리스트

- 자동차 이름 입력

  - 유효성 검사 : 쉼표를 사용해서 5자 이내의 차 이름을 입력했는지
  - 예외처리 : 유효성을 통과하지 못했다면 alert 및 다시 입력하도록 구현

  - 자동차 이름이 정상적으로 입력되었을 때 이동 횟수를 입력할 수 있는 input창이 렌더되도록 구현
    - 예외처리 : 이 때 자동차 이름, [확인] 버튼을 다시 입력하지 못하도록 한다.

- 이동 횟수 입력

  - 유효성 검사 : 0이상 입력했는지
    - 예외처리 : 유효성을 통과하지 못했다면 alert 및 다시 입력하도록 구현
  - alert 및 다시 입력하도록 구현

- 이동 횟수만큼 렌더링
- 제일 많이 이동한 차 리스트 출력

## 🌟 이번 2주차 과제에서 발전하기 위해 노력할 것

- 1주차 과제 때도 최대한 상세하게 쓰려고 노력했지만 부족했던 것 같다.
  이번에는 커밋 메시지만 보자마자 무엇을 하려고 했는지 알 수 있도록 포커스를 두고 작성해보자.
- 클래스와 메서드는 한두 단어로 유지하며 중복이름을 짓지 않는다.
- 기능 목록을 업데이트 하자. (좀 더 적극적으로 문서에 생동감을 불어넣자.)
- 예외상황도 따로 정리하자.
- 함수는 재사용성을 고려해서 만들기.
