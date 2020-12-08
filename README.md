# 🏎️ 자동차 경주 게임

## 🎯 게임 진행 순서

### 1. 자동차 이름 유효성 확인

- 차 이름의 유효성을 검사하는 함수를 통해 이름의 유효성을 판단한다.
- 이름이 유효한 경우, 시도횟수 화면을 출력하는 함수를 실행한다.

- 이름이 유효하지 않을 경우, 재입력 메시지를 출력한다.

### 2. 자동차 객체 생성

- 시도횟수를 입력하고 시도횟수 버튼을 클릭하면 유효한 차의 이름을 받아 자동차를 생성한다.

### 3. 레이싱 게임 실행

- 시도횟수만큼 레이싱 게임을 실행한다.
- 각 자동차는 레이싱 게임 결과를 가진다.

### 4. 게임 결과 화면 출력

- 시도횟수마다 차의 게임결과를 출력한다. 

### 5. 최종 우승자 표시

- 전진횟수가 가장 많은 최종 우승자(들)의 이름을 결과화면에 출력한다.



## 🎯 구현할 기능 목록

### 차의 이름

- 차의 이름을 가져오는 기능
- 차 이름의 유효성을 검사하는 기능(5자 이하)
- 유효하지 않을 시 인풋의 값을 초기화 하는 기능
- 차 이름 버튼을 클릭 시 시도횟수 버튼 클릭 이전까지의 게임을 진행하는 기능

### 자동차 클래스

- 게임 실행 시 차의 랜덤숫자가 4 이상이면 전진횟수와 전진기호를 부여하는 기능
- 게임이 끝난 자동차의 이름과 전진기호를 출력하는 기능 

### 레이싱 게임 실행

- 자동차를 생성하는 기능
- 시도횟수만큼 자동차 게임을 실행하는 기능

### 게임 화면 출력

- 시도횟수 화면을 출력하는 기능
- 시도횟수만큼 레이싱게임 결과를 출력하는 기능
- 레이싱게임 우승자의 이름을 출력하는 기능

### 시도횟수

- 시도횟수 버튼을 클릭 시 차 이름 버튼 클릭 이후의 게임을 진행하는 기능



## ✅ 고민했던 부분

- 코드의 시작점을 나타내기 위해 인덱스파일에 init함수를 작성하였고, 차 이름 확인 버튼을 누름으로써 게임이 시작되기 때문에 init함수 안에 클릭함수를 넣었습니다.
- 함수의 이름을 보고 어느 파일에 존재하는지 예측할 수 있도록 화면출력 기능을 가진 함수를 renderScreen.js 파일에 분리하였습니다.
- 함수의 이름을 보고 어느 파일에 존재하는지 예측할 수 있도록 차의 이름과 관련된 기능을 가진 함수를 carNames.js 파일에 분리하였습니다.
- 자동차를 생성하는 함수와 시도횟수만큼 자동차게임을 실행하는 함수가 게임실행과 밀접하다고 생각하여 play.js 파일에 분리하였습니다.
- 시도횟수버튼에 이벤트를 부여하는 함수와 버튼 클릭 시 게임이 진행되도록 하는 함수가 시도횟수와 관련이 있다고 판단하여 racingCounts.js 파일에 분리하였습니다.
- 자동차가 전진하도록 하는 기능과 결과를 출력하는 기능이 자동차 클래스와 밀접한 관련이 있다고 생각하여 클래스 내부의 메소드로 작성하였습니다.
- 배열 매소드를 통한 반복문 작성에 능숙해지고 싶어 for문을 사용하지 않고 forEach를 통해 반복문을 작성해 보았습니다.  



## 🎯 기능 요구사항

-   주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
-   자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
-   자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
-   사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
-   전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
-   자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
-   우승자가 여러명일 경우 ,를 이용하여 구분한다.

## 💻 프로그램 실행 결과

![실행이미지](images/result.gif)
![실행이미지](images/result.jpg)

## ✅ 프로그래밍 요구사항

-   사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
-   외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
-   **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
    -   [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
    -   [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
-   **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
    -   예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
    -   힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
-   **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

### 추가된 요구사항

-   **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
    -   함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
-   자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
-   자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
-   레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
-   레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
-   다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.

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

-   변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
    -   [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
    -   [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
-   `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
    -   [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
-   `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
    -   [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

## 📝 미션 저장소 및 진행 요구사항

-   미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) 저장소를 fork/clone해 시작한다.
-   **기능을 구현하기 전에 javascript-racingcar-precourse/docs/README.md 파일에 구현할 기능 목록**을 정리해 추가한다.
-   **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
-   [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.
