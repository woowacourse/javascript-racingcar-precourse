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

#### classes
- *Car.js*

#### components
- *PlayRacingGane.js*
  - [X] setCars: 차 객체들을 저장하는 함수
  - [X] runRaces: count를 저장하고, 레이스를 시작하는 함수
  - [X] racing: count만큼 레이스를 하는 함수
  - [X] racingInRound: 1라운드 당 차들이 레이스 하는 함수
    - [X] getRandomNumber: 랜덤 값 받아올 함수
  - [X] getWinners: 이긴 자동차를 정하는 함수
  - [X] render: 필요한 컴포넌트들을 렌더링 하는 함수

- *CarNamesInput.js*
  - [X] handleCarNamesInput : 자동차 이름 input을 핸들링하는 함수
  - [X] getNamesFromInput: 자동차 이름을 받아올 함수
    - [X] 예외1 isValidNames: 자동차 이름의 오류 확인 하는 함수 
      - [X] 예외1-1 checkNameLength: 이름이 5글자 이상이면 에러라고 말하는 함수
      - [X] 예외1-3 isDuplicate: 중복 이름 유무 체크 함수
      - [X] 예외1-4 hasEmptyName: 공백이 이름으로 들어왔는지 유무 체크 함수
      - [X] 예외1-5 이름을 모두 받으면, 횟수를 받아오는 단계에서 또 받을 수 없도록 button과 input창 disable 처리
  - [X] makeCars: 각 instance를 생성할 함수

- *RacingcountInput.js*
  - [X] handleRacingCountInput: 횟수를 받아와 예외체크하고 race 시작하는 함수
  - [X] getRacingCount: 시도할 횟수를 받아올 함수
    - [X] 예외2 isValidCount: 시도할 횟수의 오류를 검출할 함수
      - [X] 예외2-1 음수 체크
      - [X] 예외2-2 숫자 체크
      - [X] 예외2-3 count을 모두 받으면, 다음 단계에서 또 받을 수 없도록 button과 input창 disable 처리

- *GameResult.js*
  - [X] updateResultPerRound: 1라운드마다 차의 거리를 쟤서 result에 저장하는 함수
  - [X] updateResultHTMLWithWinners: 모든 시합이 끝나고 winner를 result에 저장하는 함수
  - [X] render: 결과창을 내보내는 함수

#### constants
- *constants.js*

#### utils
- *handleDom.js*
  - [X] showErrorMessages: alert 에러 메세지
  - [X] setDisable: dom이 disable
  - [X] setVisibility: dom의 visibility hidden, visible

- *templates.js*
  - [X] getCarHTML : 자동차 거리 템플릿
  - [X] getWinnerHTML : 최종 우승자 템플릿
  - [X] getHeaderHTML : 결과창 헤더 템플릿

- *validations.js*
  - 위의 컴포넌트 들에서 모두 설명함.

- *random.js*

## 생각한 점

- **구조를 나눈다는 것이란 무엇인가?**
  - 이번 미션에서는 1주차 미션과는 다르게 import를 사용하는 점이 있었다. 나의 경우 1주차 미션에서도 import를 사용했는데, 굳이 100줄정도되는 코드에 파일분리를 사용해야하는 것일까? 라고도 의문을 갖기도 했는데, 잘못된 편견이었다는 점을 깨달았다. 코드의 길이가 문제가 아니라, 기능을 나누는 측면에서 보아야한다는 생각이 들었고 기능을 나누는 것이 필요하다면 한 파일에 들어가는 코드가 적더라도 분리를 하는게 맞는 것 같다. 후에 만약 프로젝트를 확장하더라도, 비용이 적게 들 것이다. 이번 미션 초반에서도 실수한 점은, index.js 폴더에서 코드를 모두 짜고 후에 분리를 해야겠다고 생각한 점이다. 아직 구조를 나누는 점에 대해서 잘 모르니, 일단 기능을 구현한다면 나누기 쉬울 것이라고 판단했었다. 하지만 index.js폴더에서 기능들을 꺼내와 계속 파일분리를 하는 작업에서, '애초에 파일을 분리했다면 지금 굳이 쓰지않아도 될 커밋들을 쌓는 것이 아닌가' 라는 생각이 들기도 하였고, 처음부터 모든 구조에 대해서 고민을 하고 코딩을 하는 것과 기능을 먼저 구현하는 코드는 또 달랐다. 예전에 리액트 클론코딩을 해봤던 생각을 더듬어가면서 컴포넌트와 클래스, 상수, 유틸파일로 분리해보았는데, 미션 3주차 때는 처음부터 구조에 대해 깊히 생각해봐야겠다.

- **README.md?**
  - 문서화의 중요성에 대해서는 많이 들어봤지만 이 또한 계속해서 습관화를 만들어나가야하는 부분인 것 같다. 예전에 학교 앱 프로젝트 과제를 하면서 교수님께서 깃헙 wiki를 정성스럽게 작성하라고 하신 적이 있다. 그래서 그 프로젝트만 README를 굉장히 정성스럽게 작성한 적이 있는데, 영어로 된 그 문서를 보고 필리핀사람이 메일로 질문을 하는 경험을 하면서 더욱 제대로 된 문서에 대해서 생각했었다. 이번 2주차 공통 피드백에는 살아있는 문서를 적으라는 말씀이 있었다. 조금은 모호했지만, 살아있는 것 처럼 보이게 코드를 쓰면서 새롭게 나타난 부분들에 대해서 더 자세히 적어야한다는 생각이 들었다. 다른 분의 pr을 보고 디렉토리 트리와, 기능(예외되는 곳은 예외라고 표시하면서), 개발 중 느낀점들을 추가해보았다.

- **this의 모호함**
  - js문법에 대해서 구글링을 하다보면 ES5와 ES6가 섞여서 나온다. class의 경우 보통 내부 메소드를 function a() {} 로 적는 편인 듯 하여, 클래스 메소드 들을 모두 선언식으로 적었다. 이후에 파일분리를 하면서 PlayRacingGame.js 클래스에서 하위 클래스인 CarNameInput.js로 setCar 함수를 보낼 때, 계속해서 this가 PlayRacingGame이 아닌, CarNameInput로 나와서 애를 먹었다. 이 부분은 친구의 도움을 받았는데, class안에서 arrow function을 사용하는 것은 문제가 되지 않고, 오히려 그렇지 않다면 constructor에서 함수에 this를 따로 바인딩을 해줘야하는 불편함이 있다고 하였다. 1주차에 내가 겪었던 this binding문제와 같은 이유 때문이었다. this가 계속 개념이 잘 잡히지가 않는다. 

- **1주차 미션에 비해 달라진 점.**
  - 1주차 미션과 공통적이었던 미션들에 대해서는 조금 더 자연스러워 진 것 같다. 
  - 기능별 커밋: 처음에 기능을 정리하고, 기능별로 커밋을 하는 것에 1주차보다는 자연스럽다. 하지만 초반에는 나름 기능별 커밋을 잘 하고 있었는데, 중간에 파일 분리가 대대적으로 이루어지는 바람에 커밋 메세지들이 조금 혼란스러워졌었다. 또 실수로 한 커밋에 여러 기능을 넣어버리기도 했는데, 다음 미션에는 처음부터 파일을 분리해 개발하는 것에 우선적으로 초점을 맞춰 커밋도 깔끔하게 하는 것에 더 신경써야겠다.
  - 함수가 한가지 일을 하도록 짜는 것이 조금 더 익숙해진 것 같다. 함수의 이름과 함수의 기능이 일치해야함을 깨닫고, 이번 미션에는 그 점을 더 능숙하게 처리할 수 있었다.
  - prettier와 eslint를 사용해보았다. 일단 기본 설정값을 사용해서 미션을 구현해보았다. 확실히 prettier가 기본적인 코드 컨벤션을 잡아주어 신경 쓸 필요가 없어진 부분들이 존재했다. 1주차 땐 조금 과도하게 띄어쓰기를 사용했다는 생각이 들었다.
  - for문을 지양하고 map, filter와 같은 어레이를 다루는 함수들을 사용하려했고, 확실히 이 코드가 깔끔하고 눈에 잘 보인다는 점이 만족스럽다.

