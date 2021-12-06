# 🚗 우아한 테크코스 프리코스 2주차

# 💻구현 기능 목록

- 자동차 이름 받는 input, submit button 제외 모든 하단 요소 `visibility = 'hidden'`로 초기화<br><br>
- `5자 이하, 쉼표(,)로 구분`된 자동차 이름 입력 받기
  1. 5자 초과 이름
  2. ','로 구분되지 않은 이름
  3. 중복된 이름 입력
  - 위 3가지 조건에 하나라도 해당되는 잘못된 값을 입력한 경우, **alert 창 출력** 후 `false` 반환
- 각 자동차의 이름을 쉼표(,)를 기준으로 구분해서 배열로 저장<br><br>
- 게임 시도할 횟수(count) input 창, button, count-title `visibility = 'visible'`
- 게임 시도할 횟수(count) 입력 받기
  - 0 이하의 수를 입력한 경우, **alert 창 출력** 후 `false` 반환
- 자동차 이름 배열 순회 -> `Car` 객체 생성
  - `Car` 객체 내 0에서 9 사이 랜덤 수 생성
    - if) 자동차 별로 `랜덤 수 > 4` 일경우<br>
      → '-' 출력 (전진) , `step` 변수 += 1
    - if else) 자동차 별로 `랜덤 수 ≤ 4`일 경우<br>
      → 아무것도 출력하지 않는다. (미전진)<br><br>
- result-title, result-div `visibility = 'visible'`
- 랜덤 수 생성 + 출력을 게임 시도할 횟수(count)만큼 반복
- 자동차 별로 `step` 변수의 수 비교
- `step` 변수가 가장 높은 자동차의 이름들 배열로 반환
  - span tag로 자동차 이름 출력할 요소 생성 (racing-winners)
  - racing-winners에 `step` 변수가 가장 높은 자동차의 이름들 출력
  - if) 자동차의 이름이 하나 이상일 경우<br>
    → 쉼표(,)를 이용하여 구분된 형태(join 이용)로 차례로 출력
    <br>

---

# 요구사항 정리

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

## ✅ 프로그래밍 요구사항

- 주어진 `index.html`에 html 엘리먼트를 직접 추가하거나 기존의 html 엘리먼트를 임의로 삭제하지 않는다. id와 같은 선택자를 추가하는 작업만 가능하다.
- 다음과 같이 Car 객체를 만들고, new 를 이용해 인스턴스를 만들어 사용한다.

```jsx
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

### DOM 선택자

각 요소에 아래와 같은 선택자를 반드시 지정한다. 선택자를 올바르게 지정하지 않은 경우 0점으로 처리될 수 있으므로 주의한다.

- 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.
- 최종 우승자를 출력하는 span 태그는 `racing-winners` id값을 가진다.
  - 예) `<span id="racing-winners">poco,park,jun</span>`

### 라이브러리

- 전진하는 조건을 판단하기 위한 랜덤 값은 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

### 공통 요구사항

- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다.
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com/)
  - [NHN FE개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.
- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.

## 📝 과제 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precours) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 구현할 기능 목록을 정리해 javascript-racingcar-precourse/docs/README.md 파일에** 추가한다.
- **git의 commit 단위는 앞 단계에서 [README.md](http://readme.md/) 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.
