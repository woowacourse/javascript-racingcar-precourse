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

## 📝 구현 기능 목록

#### Input(입력받을 것)
  - 자동차 이름들
  - 시도할 횟수

#### 알고리즘(과정)
- 자동차의 이름들이 올바른 이름인지 확인한다.<br>
  **(예외처리)**<br>
  - 1.) 자동차의 이름이 5글자보다 길 때
  - 2.) 자동차의 이름이 공백일때
  - 3.) 자동차의 이름이 다른 자동차의 이름과 같을 때
  - 4.) 똑같은 자동차의 이름이 있을 때

- 시도할 횟수가 정상적인 입력인지 확인한다.<br>
  **(예외처리)**<br>
  - 1.) 음수가 입력되었을 때
  - 2.) 소수(ex1.5)가 입력되었을 때
  - 3.) 아무것도 입력이 안되었을 때

- 1회의 레이스를 진행한다.

- 화면에 결과를 출력한다.

- 위의 과정 시도할 횟수만큼 반복한다.

- 1등을 찾는다.

- 최종 1등을 출력한다.


## 📝 생각했던 부분

- class.. 어떻게 나눠야할까?
  <p>이 부분은 프리코스를 진행하는 분들 모두가 고민하는 부분일 것입니다. 저도 너무 많이 고민하고 찾아가며 이전에 다른 분들이 쓴 코드들을 정말 많이 찾아봤습니다. 저는 프로그램은 크게 input과 output 그리고 내부 알고리즘으로 나뉘고 여기서 서로 소통하는 부분(예를 들어 input의 조건이 내부알고리즘을 필요할 경우)을 위한 별도의 파일을 만들었습니다.(저의 파일에서는 inputView.js에서 input.js와 carNameCheckor.js가 같이 만나 하나의 과정을 수행합니다.) 또한 내부알고리즘에서는 자동차(car)객체를 만들어 자동차가 가져야하는 기능들을 수행할 수 있게 했습니다. 또한 자동차들(cars)라는 객체도 추가로 만들어 자동차들의 경주 1이닝을 다룰 수 있게 하고 그에대한 결과HTML생성 기능 그리고 1등찾기 및 우승자HTML생성 기능을 구현하였습니다. 이렇게 2주차에서는 프로그램을 만들 때 이용할 객체지향 구조에 대해 깊게 생각해보았습니다. </p>
  
- 객체를 생성 할 때 조건을 주는 것은 어떨까?
  <p>객체를 생성하면서 constructor안에서 조건을 주어 조건에 맞지 않으면 error 던지게 하여 존재하는 객체는 특정 조건 만족을 보장할 수 있게 만들 수 있습니다.예를 들면 car라는 객체를 만들 때 constructor에서 car의 이름이 만족해야하는 조건들을 넣어두고 이를 만족하지 못하면 error를 던지는 것입니다.이는 일급 컬렉션을 만들 때도 이용될 수 있지만 생각해보면 car의 이름이 5글자 이하여야 한다는 것은 이 RacingGame의 규칙이지 car의 규칙은 아니었습니다. 만약 다른 게임에서 만약 7자리 이하로 조건을 다르게 적용한다면 그 게임에서는 car class를 사용하지 못할 것 입니다. 따라서 car와 cars에 생성할 때의 조건을 주어 만드려고 했으나 이번 미션에서는 별도의 class를 만들어 이름을 검사했습니다. 그런데 반대로 만약 positive라는 객체를 만들 때 음수값이 들어오면 error를 발생시키는 것은 positive자체의 지켜져야하는 규칙이므로 이는 적절합니다. 여기서 저는 "그럼 언제 내부적으로 조건을 주는 것이 좋을까?"에 대해서 생각해 보았고 "꼭 필요하고 만족되지 않으면 프로그램에 영향을 줄 수 있는 객체의 조건이면 이렇게 객체속에 조건을 주는 것이 좋을 수 있다"고 생각했습니다.</p>
  
## 📝 노력했던 부분

- 모듈화를 통해 체계적인 프로그램을 만드려고 노력했습니다.
  
- 하드코딩을 하지않으려고 했습니다.
  - 하드코딩을 하지 않으면 제 코드가 가독성이 떨어지는 것같습니다. 상수들을 의미있게 바꾸어 가독성을 높이려고 노력했습니다.

- 추상화 정도를 맞추려고 노력했습니다.
  - 추상화가 되어 있다면 코드보다는 영어 문장에 가까워져 코드의 가독성이 높아졌습니다. 따라서 글처럼 부드럽게 읽을 수 있게 만드려고 노력했습니다.

- 위에서 아래로 읽을 수 있게 만들어 보고자 했습니다.
  - 가장 추상적인 부분은 위에 그리고 그보다 조금은 구체적인 부분은 밑으로 위치시켜 위에서부터 아래로 읽을 수 있게 구성하려고 노력했습니다.
     
     
## 📝 참고했던 자료들
- [우아한테크세미나] 190425 TDD 리팩토링 by 자바지기 박재성님(https://www.youtube.com/watch?v=bIeqAlmNRrA&t=4062s)
- 생각하라 객체지향처럼 -우아한 형제들-(https://woowabros.github.io/study/2016/07/07/think_object_oriented.html)
- 일급 컬렉션 (First Class Collection)의 소개와 써야할 이유(https://jojoldu.tistory.com/412)
