# 🏎️ 자동차 경주 게임

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


## 📂 파일 구조

```
src
 ┣ classes
 ┃ ┗ Car.js
 ┣ components
 ┃ ┣ CarNamesInput.js
 ┃ ┣ GameResult.js
 ┃ ┣ PlayRacingGame.js
 ┃ ┗ RacingCountInput.js
 ┣ constants
 ┃ ┗ constants.js
 ┣ utils
 ┃ ┣ handleDom.js
 ┃ ┣ random.js
 ┃ ┣ templates.js
 ┃ ┗ validations.js
 ┣ index.css
 ┗ index.js
```

## 💜 추가 될 기능

- PlayRacingGane.js
  - [X] setCars: 차 객체들을 저장하는 함수
  - [X] runRaces: count를 저장하고, 레이스를 시작하는 함수
  - [X] racing: count만큼 레이스를 하는 함수
  - [X] racingInRound: 1라운드 당 차들이 레이스 하는 함수
    - [X] getRandomNumber: 랜덤 값 받아올 함수
  - [X] getWinners: 이긴 자동차를 정하는 함수
  - [X] render: 필요한 컴포넌트들을 렌더링 하는 함수

- CarNamesInput.js
  - [X] handleCarNamesInput : 자동차 이름 input을 핸들링하는 함수
  - [X] getNamesFromInput: 자동차 이름을 받아올 함수
    - [X] 예외1 isValidNames: 자동차 이름의 오류 확인 하는 함수 
      - [X] 예외1-1 checkNameLength: 이름이 5글자 이상이면 에러라고 말하는 함수
      - [] 예외1-2 이름을 안넣은경우.
      - [X] 예외1-3 isDuplicate: 중복 이름 유무 체크 함수
      - [X] 예외1-4 hasEmptyName: 공백이 이름으로 들어왔는지 유무 체크 함수
      - [X] 예외1-5 이름을 모두 받으면, 횟수를 받아오는 단계에서는 이름을 또 받을 수 없도록 button disable 처리
  - [X] makeCars: 각 instance를 생성할 함수

- RacingcountInput.js
  - [X] handleRacingCountInput: 횟수를 받아와 예외체크하고 race 시작하는 함수
  - [X] getRacingCount: 시도할 횟수를 받아올 함수
    - [X] 예외2 isValidCount: 시도할 횟수의 오류를 검출할 함수
      - [X] 예외2-1 음수 체크
      - [X] 예외2-2 숫자 체크

- GameResult.js
  - [X] updateResultPerRound: 1라운드마다 차의 거리를 쟤서 result에 저장하는 함수
  - [X] updateResultHTMLWithWinners: 모든 시합이 끝나고 winner를 result에 저장하는 함수
  - [X] render: 결과창을 내보내는 함수

- Car.js

- constants.js

- handleDom.js
  - [X] showErrorMessages: alert 에러 메세지
  - [X] setDisable: dom이 disable
  - [X] setVisibility: dom의 visibility hidden, visible

- random.js

- templates.js
  - [X] getCarHTML : 자동차 거리 템플릿
  - [X] getWinnerHTML : 최종 우승자 템플릿
  - [X] getHeaderHTML : 결과창 헤더 템플릿

- validations.js
  - 위의 컴포넌트 들에서 모두 설명함.