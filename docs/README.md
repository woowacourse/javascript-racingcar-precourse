## 📋 구현할 기능 목록

- [x] ❗📠 시도할 횟수 입력창 가리기, 실행결과 제목 가리기
- [x] ⌨️ 자동차의 이름을 5자 이하로 쉼표(,)로 구분해서 입력받는다
  - [x] 🚥 빈칸 제출 검사
  - [x] 🚥 공백 입력 검사
  - [x] 🚥 중복 입력 검사
  - [x] 🚥 5자 이하 입력만 허용
  - [x] 🚥 비어진 이름('') 입력 검사
- [x] ❗📠 자동차 이름 입력창, 제출 버튼 사용불가 설정
- [x] 🏎 이름의 수에 맞게 자동차 생성
  - [x] 🏎 자동차는 `이름`, `현재 위치`를 가진다
  - [x] 🏎 자동차는 0에서 9 사이에서 무작위 값이 4 이상일 경우 전진한다
- [x] 📠 시도할 횟수 입력창 보여주기
- [x] ⌨️ 시도할 횟수를 입력 받는다
  - [x] 🚥 빈칸 제출 검사
  - [x] 🚥 숫자 입력만 허용 (onkeydown)
  - [x] 🚥 양의 정수 입력만 허용
- [x] ❗📠 시도할 횟수 입력창, 제출 버튼 사용불가 설정
- [x] 📠 실행 과정 보여주기
  - [x] 🏎 게임 횟수 마다 무작위 값으로 전진을 시도한다
  - [x] 📠 게임 횟수 마다 이름, 진행 상황 보여주기
- [x] 📠 최종 우승자 보여주기
  - [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

<br>

## **🤔 고민했던 부분**

### `racing-count-input`에 숫자 외 입력이 가능하다

처음에는 `input type`이 `number`라 숫자만 입력 가능한 줄 알았는데, 테스트를 진행하다 보니 `+`,` -`,` e`,` .` 등의 입력이 가능했습니다.

안내를 무시하고 `+`,` -`,` e`,` .` 등이 포함된 문장으로 제출시 `alert`로 다음과 같은 안내를 받게 됩니다.
```javascript
// constants.js
export const ERROR = {
  INCLUDE_SPECIAL: '횟수는 특수문자를 입력하실 수 없습니다.',
};
```

<br>

### 게임의 진행 상황을 보여주는 방법

`Car`는 현재 위치를 알려주는 `_location` 인스턴스 속성을 가집니다.

`_location` 인스턴스 속성은 숫자이기 때문에 진행상황을 `-`으로 표현하려면 이를 변환하는 함수가 필요했습니다.

반복문을 통해 현재 위치만큼 `-`를 추가하고 반환하는 `makeHyphenGraph`함수를 만들어서 활용하였습니다.

```javascript
// DOMUtils.js
const makeHyphenGraph = number => {
  let result = '';
  Array.from({ length: number }, () => (result += '-'));
  return result;
};
```

<br>

### 게임의 우승자를 보여주는 방법

```javascript
// DOMUtils.js
showWiners: array => {
  // 1. 자동차 객체들이 담겨있는 배열에서 현재위치만 반환하고 그중 최대 값을 추출한다. 
  const maxValue = Math.max(...array.map(object => object._location));
  
  const winners = array
  // 2. 자동차 객체들이 담겨있는 배열에서 최대 값을 갖고있는 객체들만 필터링한다.
  .filter(object => object._location === maxValue)
  // 3. 최대 값으로 필터링된 객체들을 자동차의 이름으로 반환한다.
  .map(object => object._name)
  // 4. 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
  .join(',');

  $('#app').insertAdjacentHTML(
    'beforeend',
    `<div>최종 우승자: 
       <span id="racing-winners">${winners}</span>
     </div>`,
  );
},
```

<br>

## ✅ 프로그래밍 요구사항

- 주어진 `index.html`에 html 엘리먼트를 직접 추가하거나 기존의 html 엘리먼트를 임의로 삭제하지 않는다. id와 같은 선택자를 추가하는 작업만 가능하다.
- 다음과 같이 Car 객체를 만들고, new 를 이용해 인스턴스를 만들어 사용한다.

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

### DOM 선택자

각 요소에 아래와 같은 선택자를 반드시 지정한다. 선택자를 올바르게 지정하지 않은 경우 0점으로 처리될 수 있으므로 주의한다.

- 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.
- 최종 우승자를 출력하는 span 태그는 `racing-winners` id값을 가진다.
  - 예) `<span id="racing-winners">poco,park,jun</span>`

### 라이브러리

- 전진하는 조건을 판단하기 위한 랜덤 값은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

### 공통 요구사항

- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- **자바스크립트 코드 컨벤션을 지키면서 프로그래밍** 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다.
  - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
  - [Airbnb JavaScript Style Guide()](https://github.com/airbnb/javascript)
  - [JavaScript Standard Style](https://standardjs.com)
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
