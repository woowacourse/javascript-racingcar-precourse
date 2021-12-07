# 🏎 자동차 경주 게임 
자동차 경주 게임 프로젝트는, 우아한테크코스 2차 프리코스 과제입니다. 
<br>사용자가 경주에 참여할 자동차들의 이름과 게임 횟수를 입력하면, 경주에서 우승한 자동차를 알려주는 게임입니다. 


## 🖥 실행 결과
[데모페이지](https://rladpwl0512.github.io/javascript-racingcar-precourse/)

![Dec-07-2021 00-17-39](https://user-images.githubusercontent.com/52344833/144871945-b60edb5e-91ac-4ada-b890-41db86c51212.gif)


## 🎯 기능 구현 목록
**1. 자동차의 이름을 입력받는 기능**
- [x] 사용자는 자동차 이름을 input에 입력하고, 엔터 혹은 확인버튼을 클릭한다. 
  - 자동차 이름은 ,를 기준으로 구분하여 입력하며, 이름은 5자 이하만 가능하다. 
- [x] 입력받은 자동차 이름이 유효하지 않으면, alert를 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다. 
  - [예외] 5자를 초과한 이름이 있을 때 
  - [예외] 중복되는 이름이 있을 때 
  - [예외] 공백을 입력했을 때 
- [x] 유효하다면
  - [x] 시도 횟수를 입력받는 form을 렌더링한다. 
  - [x] 자동차 이름을 입력받는 input은 비활성화 한다. 

**2. 시도 횟수를 입력받는 기능**
- [x] 사용자는 시도할 횟수를 입력하고, 엔터 혹은 확인버튼을 클릭한다. 
- [x] 입력받은 값이 유효하지 않으면, alert를 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다. 
  - [예외] 공백인 경우 
  - [예외] 0 이하인 경우
- [x] 유효하다면  
  - [x] 시도 횟수를 입력받는 input창을 비활성화 한다. 
  - [x] 게임을 시작한다. 

**3. 자동차를 전진 또는 정지할지 결정하는 기능** 
- [x] 입력한 자동차들을 객체로 생성한다. (객체들은 배열에 넣는다. )
- [x] 각 자동차 객체에서, 무작위 값을 구한다. 
  -  0~9 사이의 무작위 값을 구한다 
  - 무작위 값이 4 이상일 경우, 전진한다. ('-' 추가)
  - 무작위 값이 3 이하인 경우, 멈춘다. 
- [x] 화면에 전진 or 정지 결과를 '-'로 출력한다. 
- [x] 위 과정을 입력한 시도 횟수만큼 반복한다. 

**4. 게임과정을 출력하는 기능**
- [x] 게임 과정을 출력한다. 

**5. 최종 우승자를 출력하는 기능** 
- [x] 전진 횟수가 가장 많은 자동차(우승자)를 구한다.
  - 우승자는 한명 이상일 수 있다. 
- [x] 우승자를 출력한다.
  - [x] 우승자가 여러명일 경우, 쉼표(,)를 이용하여 구분하여 출력한다. 
  - [x] id가 'racing-winners'인 span태그를 만들고, 이 태그 내에 최종 우승자를 출력한다. 

## ✅ 요구 사항
- [x] 주어진 index.html에 html 엘리먼트를 직접 추가하거나 기존의 html 엘리먼트를 임의로 삭제하지 않는다. id와 같은 선택자를 추가하는 작업만 가능하다.
- [x] 다음과 같이 Car 객체를 만들고, new 를 이용해 인스턴스를 만들어 사용한다.
  ```javascript
  function Car(name) {
    this.name = name;
  }
  ```
- [x] dom 선택자를 잘 지정한다. 
  - 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
  - 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.
  - 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
  - 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.
  - 최종 우승자를 출력하는 span 태그는 `racing-winners` id값을 가진다.
    - 예) <span id="racing-winners">poco,park,jun</span>
- [x] 전진하는 조건을 판단하기 위한 랜덤 값은 MissionUtils 라이브러리의 Random.pickNumberInRange를 사용해 구한다.
- [x] 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.
- [x] 자바스크립트 코드 컨벤션을 지키면서 프로그래밍 한다. 정답이 없으므로, 다양한 컨벤션을 비교해보며 스스로 더 적절해보이는 컨벤션을 자율적으로 선택한다.
- [x] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다. 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
- [x] 함수(또는 메소드)가 한 가지 일만 하도록 최대한 작게 만들어라.
- [x] 변수 선언시 var 를 사용하지 않는다. const 와 let 을 사용한다.
- [x] import 문을 이용해 스크립트를 모듈화하고 불러올 수 있게 만든다.
- [x] 함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.
- [x] 테스트에서 all pass를 한다. (`npm run test`)

## 🗂 디렉터리 구조 
```
.
├── LICENSE
├── README.md
├── cypress.json
├── images
├── package-lock.json
├── package.json
├── docs
│   └── README.md // 프로젝트 설명 문서
├── .eslintrc
├── .prettierrc
├── index.html
├── src
│   ├── css
│   │   └── style.css
│   └── js
│       ├── index.js                      // 페이지에 접속하면 게임을 시작할 수 있게 하는 로직
│       ├── controllers                   // models, views 사이를 연결하면서 이벤트를 관리하고, 프로그램이 돌아갈 수 있게 하는 역할
│       │   ├── handleCarNameInput.js     // index.js에서 자동차 이름 입력창을 클릭하면 실행하는 로직
│       │   ├── handleRacingCountInput.js // index.js에서 시도 횟수를 입력받는 창을 클릭하면 실행하는 로직 
│       │   └── playGame.js               // 위 두개의 입력을 제대로 했을 때, 자동차 게임을 시작하는 로직 
│       ├── models                        // 데이터를 관리하는 역할 (views에 접근하지 않음)
│       │   ├── Car.js                    // Car 객체를 생성 및 관리하는 생성자 함수 
│       │   ├── getCarArr.js              // 사용자가 입력한 자동차들을 객체로 만들어서, 배열화 시키는 로직 
│       │   ├── getRandomNumber.js        // 랜덤한 숫자를 생성하는 로직 
│       │   └── getWinner.js              // 게임의 우승자를 가져오는 로직  
│       ├── views                         // 화면을 관리하는 역할 (models에 접근하지 않음)
│       │   ├── alertInputError.js        // input 에러를 alert 창으로 띄우는 로직 
│       │   ├── disableInput.js           // input창을 입력한 후, 비활성화 시키는 로직 
│       │   ├── focusInput.js             // input창에 자동 포커스 될 수 있도록 하는 로직 
│       │   ├── printGameProcess.js       // 게임 과정을 출력하는 로직 
│       │   ├── printWinner.js            // 게임 우승자를 출력하는 로직 
│       │   ├── renderCountInput.js       // 시도 횟수를 입력하는 input 창을 화면에 렌더링하는 로직
│       │   └── resetInput.js             // input 창을 공백으로 만들어주는 로직 
│       └── utils                         // 위에서 공통적으로 사용하는 것들을 모아놓은 폴더
│           ├── constants.js              // 상수 데이터를 모아놓은 파일 
│           └── dom.js                    // dom 요소를 가져오는 로직 
└── test
    └── app.spec.js

```
