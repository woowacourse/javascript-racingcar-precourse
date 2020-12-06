# 🏎️ 자동차 경주 게임

## 📝 기능 구현 목록

### 입력

1. 사용자는 자동차 이름을 입력한다
    - 자동차 이름은 5자 이하만 가능하다
    - 자동차 이름을 `,`로 구분한다
    - **예외:** `,` 옆에 있는 *white-space*는 무시한다
    - 자동차 입력 예시: `Car1, Car2   , M.D., A B C,   ` => 자동차 이름으로 `Car1`, `Car2`, `M.D.`, `A B C` 입력받음
    - **에러:** 이름을 입력하지 않은 경우 잘못된 입력으로 처리한다.
    - **에러:** 이름이 중복된 경우 잘못된 입력으로 처리한다.
    - **에러:** 이름이 5자를 넘어가는 경우 잘못된 입력으로 처리한다.
2. 사용자는 이동 횟수(경주 횟수)를 입력한다
    - 이동 횟수는 1 이상의 자연수여야 한다
    - **에러:** 이동 횟수가 0 이하인 경우 잘못된 입력으로 처리한다.
    - **에러:** 이동 횟수가 숫자가 아닌 경우 잘못된 입력으로 처리한다.
    - **에러:** 이동 횟수가 정수가 아닌 경우 잘못된 입력으로 처리한다.
    
    
### 자동차 경주

1. 자동차는 한 경주당 전진 / 정지 중 한가지 행동을 취한다
    - 0~9 사이 랜덤값을 구해 전진 / 정지를 결정한다 (4 이상은 전진, 3 이하는 정지)


### 출력

1. 모든 경주의 결과를 출력한다
    - 이동 횟수 버튼을 누르면 경주를 n번 진행하고, 각 경주마다 결과를 출력한다
    - 자동차 이름을 함께 출력한다
    - 전진은 `-` 를 이용해 표현한다
    - 이름 입력 버튼을 여러번 누를 경우, 이전 게임의 결과를 지운다 
    - 이동 횟수 버튼을 여러번 누를 경우, 이전 게임의 결과를 지우고 새 게임의 결과를 출력한다
2. 모든 경주가 끝난 뒤 우승자를 출력한다
    - 우승자는 여러명일 수 있다
    - 우승자가 여러명이라면 `,` 를 이용해 구분한다

### 에러 처리

1. 잘못된 입력이 들어오면 사용자에게 알려준다.
    - 사용자에게 alert로 에러 내용을 보여준다
    - 에러를 발생시킨 원인을 focus하여 재입력할수 있게 한다.


## 🕹️ 실행방법


실행하기 전 node.js와 npm을 먼저 설치한다. (<https://nodejs.org/ko/>)


### 실행 준비

이 repo를 다운받은 후 sunmon 브랜치로 이동한다

```bash
git clone https://github.com/Sunmon/javascript-racingcar-precourse.git
cd javascript-racingcar-precourse
git checkout sunmon
```

의존성 패키지를 다운받는다

```bash
npm install
```

### 실행

서버를 실행한다

```bash
cd javascript-racingcar-precourse 
npm start
```

브라우저에 `localhost:8080`을 쳐서 접속한다
    
    
    
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

