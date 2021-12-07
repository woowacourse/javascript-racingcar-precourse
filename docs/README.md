<h1 align="middle">🏎&nbsp;자동차 경주 게임</h1>

## 👀 게임 설명

초간단 자동차 경주 게임은 주어진 횟수 동안 어떤 자동차가 가장 많이 움직였는지를 판단하는 게임이다.

---

## 📃 기능 목록

#### 💬 &nbsp;자동차 이름 입력

- [ ] 자동차 이름을 입력받는다.

  - 한 번에 여러 이름을 입력받으며, 이름은 `쉼표(,)` 를 기준으로 구분한다.
  - 자동차 이름은 5자 이하여야 한다.
  - 자동차 이름에는 영문자, 숫자만 포함될 수 있으며, 대소문자를 구분한다.
  - 입력에 공백은 허용하지 않는다.

- [ ] 아래와 같은 입력 오류가 있으면 `alert`를 이용해 적절한 메시지를 보여주고, 다시 입력할 수 있게 한다.
  - [x] 자동차 이름이 5자 초과인 경우
  - [x] 자동차 이름에 영문자와 숫자, 콤마 이외의 문자 등이 포함된 경우
  - [x] 중복된 자동차 이름이 있는 경우
  - [ ] 자동차 이름에 공백이 포함된 경우
  - [x] 아무 것도 입력하지 않은 경우

#### 👀 &nbsp;시도 횟수 입력

- [ ] 자동차들의 전진을 몇 번 시도할 것인지 시도 횟수를 입력 받는다.

  - 숫자만 입력할 수 있다.

- [ ] 아래와 같은 입력 오류가 있으면 `alert`를 이용해 적절한 메시지를 보여주고, 다시 입력할 수 있게 한다.
  - [ ] 입력에 숫자가 아닌 문자, 공백 등이 포함된 경우
  - [ ] 아무 것도 입력하지 않은 경우

#### 🕹 &nbsp;자동차 경주 게임

- [ ] 시도 횟수만큼 자동차들은 전진하거나 멈춘다.

  - [ ] (1) 0 ~ 9 사이의 무작위 값을 구한다.
  - [ ] (2) 무작위 값이 4 이상인 경우에만 전진한다.
  - [ ] 입력받은 시도 횟수만큼 위 (1), (2) 과정을 반복하며 자동차들은 전진하거나 멈춘다.

- [ ] 전진을 시도할 때 마다 게임 진행 상황을 보여준다.

  - [ ] `자동차 이름`과 지금까지의 `전진 횟수`를 표시한다.

- [ ] 시도 횟수가 끝나면 우승자를 가리고, 게임은 종료된다.
  - [ ] 가장 많이 전진한 자동차가 우승한다. 우승자는 1명 이상일 수 있다.
  - [ ] 최종 우승자가 여러 명일 경우, 이름을 `쉼표(,) 공백` 으로 구분하여 보여준다.

---

## 💌 미션 요구사항 목록

> 주어진 미션의 요구사항들을 만족시켰는지 확인하기 위한 목록입니다.

#### 🎯 기능 요구사항

- [x] [기능 요구사항](https://github.com/gxxrxn/javascript-racingcar-precourse#-%EA%B8%B0%EB%8A%A5-%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD)을 만족시키는 기능 목록을 작성한다.

#### ✅ 프로그래밍 요구사항

- [ ] id와 같은 선택자를 추가하는 것 외에 주어진 `index.html` 을 수정하지 않는다.
- [ ] `Car` 객체를 만들고, `new` 로 인스턴스를 생성하여 사용한다.

  ```javascript
  class Car {
    constructor(name) {
      this.name = name;
    }
  }
  ```

- 각 요소에 아래와 같은 선택자를 반드시 지정한다.
  - [ ] 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
  - [ ] 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.
  - [ ] 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
  - [ ] 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.
  - [ ] 최종 우승자를 출력하는 span 태그는 `racing-winners` id값을 가진다.
    - 예) `<span id="racing-winners">poco,park,jun</span>`
- [ ] 무작위 값은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
- [ ] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [ ] [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)의 자바스크립트 코드 컨벤션을 지키면서 프로그래밍한다.
- [ ] indent(인덴트, 들여쓰기)를 3이 넘지 않도록 구현한다.
- [ ] 변수 선언시 `var` 를 사용하지 않는다.
- [ ] 함수(메소드)의 길이가 15라인을 넘지 않도록 구현한다.

#### 📝 과제 진행 요구사항

- [x] [미션 저장소](<[https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse)>)를 fork/clone해 미션을 시작한다.

- [ ] 기능 목록 단위로 커밋한다.
