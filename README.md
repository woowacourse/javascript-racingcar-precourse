# 🏎️ 자동차 경주 게임

## 🛠 구현 기능 목록
- 맨 처음에 racing-count-input & submit, 결과창 숨기기
  - 자동차 이름 검사 후 racing-count-input & submit 드러내기
- 자동차 이름 입력값이 적절한 값인지 검사하기
  - 각 이름이 5자 이하여야 함
  - 빈 문자열이 아니어야 함
  - 콤마로 구분된 각 이름 중에 빈 문자열이 있으면 안 됨
  (ex: east,west,,north)
  - 올바른 입력값이 아니면 alert 메시지 보여주기, 재입력할 수 있게 하기
- 입력 문자열을 콤마(',')단위로 구분해서 배열에 집어넣기
  - trim 함수로 이름 양끝의 공백 제거해주기
- 입력된 이름 수만큼 자동차 객체 생성하기
- 시도할 횟수 입력값이 적절한 값인지 검사하기
  - 숫자여야 함
  - 빈 문자열이 아니어야 함
  - 1보다 작은 숫자가 아니어야 함
  - 올바른 입력값이 아니면 alert 메시지 보여주기, 재입력할 수 있게 하기
- 각 자동차마다 0 ~ 9 사이의 랜덤 숫자 뽑기
  - 4 이상일 경우 전진('-'), 3이하일 경우 정지하기('')
  - 주어진 횟수만큼 반복하기
- 각 자동차마자 주어진 횟수만큼 반복한 뒤 결과 문자열 return 하기
- 결과 문자열의 길이를 비교해서 최종 우승자를 골라내기
- 최종 우승자 출력하기
  - 최종 우승자가 여러 명일 경우 콤마(',')를 이용하여 구분하기
- 결과가 나온 상태에서 다시 입력을 시도하는 경우
  - 자동차 이름을 새로 입력하면 해당 이름으로 객체 새로 만들기(기존의 객체 삭제)
  - racing-count-input에 입력되어있던 내용 지우고 focus()
  - 시도 횟수를 새로 입력하면 기존의 게임 내용과 결과 모두 지우고 새로운 게임을 진행

<br>

## 🎯 기능 요구사항

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러명일 경우 ,를 이용하여 구분한다.

## 💻 프로그램 실행 결과

![실행이미지](images/result.gif)
![실행이미지](images/result.jpg)


## ✅ 프로그래밍 요구사항
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

### 추가된 요구사항

- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
- 다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.

```javascript
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

- 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)


## 📝 미션 저장소 및 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 javascript-racingcar-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

