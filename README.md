# 🏎️ 자동차 경주 게임

## 📌생각 정리
내용이 길어 노션으로 따로 첨부합니다.

[https://www.notion.so/Week2-c2878a90d7f54d88b6615b7c8e9abaca](Click Here!)

## 📌함수 목록
- index.js
    [x] `RacingCarGame` - 1판의 게임 생성
    [x] `setNumberOfCars` - RacingCarGame객체의 number-of-cars값 설정
    [x] `getNumberOfCars` - RacingCarGame객체의 number-of-cars값 리턴
    [x] `setQuarter` - RacingCarGame객체의 quarter값 설정
    [x] `getQuarter` - RacingCarGame객체의 quarter값 리턴
    [x] `isGameEnd` - 1판의 게임이 끝났는지 판별. 입력받은 분기만큼의 실행이 끝났을 때 true 리턴
- utils.js
    [x] `Car` - Car 객체 생성자. Car의 name값 설정, move는 0, winner은 false를 초기값으로 설정
    [x] `randomNumberCreator` - 0, 9사이의 random값 생성
    [x] `isMoved`  - Car의 전진 여부. 숫자를 입력받아 4이상일 경우 true, 3이하면 false
    [x] `setCarMove` - isMoved의 결과에 따라 Car객체의 move값 변화
    [x] `getCarMove` - Car객체의 move값 리턴
    [x] `setCarWinner` - Car객체의 winner값 설정
    [x] `getCarWinner` - Car객체의 winner값 리턴
- input.js
    [x] `carNamesInput` - 입력받은 이름을 쉼표(,)로 구분하여 리스트로 리턴
    [x] `isCarNameValid` - 이름이 하나라도 5자를 넘어갈 경우 alert
    [x] `racingCountInput` - 입력받은 값만큼 RacingCarGame의 quarter 속성 변경
- output.js
    [x] `carStatus` - Car객체의 moved를 입력받아 자동차별로 움직인 거리를 리턴
    [x] `gameStatus` - carStatus의 결과를 합쳐서 전체 게임 상황을 출력
    [x] `creatResultMessage` - Car객체의 winner값을 검사하여 true인 객체만으로 결과 메세지 생성
    [x] `printResult` - 승리자 출력
- buttons.js
    [x] `carNamesEventListener` - text 상자로 입력받은 값을 리턴하는 이벤트 리스너
    [x] `racingCountEventListener` - text 상자로 입력받은 값을 리턴하는 이벤트 리스너
------
## 🎯 기능 요구사항

[x] 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
[x] 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
[x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
[x] 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
[x] 전진하는 조건은 0에서 9 사이에서 random 값을 구한 후 random 값이 4 이상일 경우 전진하고, 3 이하의 값이면 멈춘다.
[x] 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
[x] 우승자가 여러명일 경우 ,를 이용하여 구분한다.


## ✅ 프로그래밍 요구사항
[x] 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 재입력할 수 있게 한다.
[x] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
[x] **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다
[x] **indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용**한다.
[x] **함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게** 만들어라.

### 추가된 요구사항

[x] **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
[x] 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
[x] 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
[x] 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
[x] 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
[x] 다음 Car 객체를 만들고, new 를 이용해 인스턴스를 만든다.

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

[x] 변수 선언시 `var` 를 사용하지 않는다. `const` 와 `let` 을 사용한다.
[x] `import` 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
[x] `template literal`을 이용해 데이터와 html string을 가독성 좋게 표현한다.
