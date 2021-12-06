<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## ✅ 기능 구현 순서

1. `initialization` 기능 구현 하여 초기화면 초기화

   - 자동차이름 입력값 받는 엘리먼트 제외한 나머지 `hidden`

2. 사용자가 입력한 자동차 이름, 레이싱 횟수 가져오는 기능 구현.

   - 자동차의 이름은 5 자 이하.
   - 자동차의 이름은 쉼표(,) 로 구분되어 있다.
   - 레이싱의 횟수는 1 이상의 정수
     <br> <br>

3. 필요한 상수들 따로 `constants` 파일에 상수화 <br><br>

4. 사용자 입력값의 유효성을 검사하는 함수 생성. <br>

   1. 자동차 이름 유효성 검사

   - 사용자가 자동차 이름을 5자 초과로 입력했을때
   - 사용자가 자동차 이름에 공백을 입력 하였을때
   - 사용자가 자동차 이름을 중복으로 입력 하였을때
   - 자동차 이름을 한개만 입력하였을때 (게임진행 불가능)
   - 자동차 이름을 입력하지 않았을때<br><br>

   2. 레이싱 횟수 유효성 검사

   - 사용자가 입력한 값이 음수이거나 0 일때<br><br>

5. 유효성 검사 성공 시 `button`, `input` 비활성화 기능과 실패시 `input` 클리어후 다시 입력할수 있게 만드는 기능

6. 자동차 이름 유효성 검사 성공시에는 `#racing-count` 컨테이너 보이게 하는 기능,
   레이싱 횟수 유효성 검사 성공시에는 `#result` 텍스트 보이게 하는 기능 구현

7. 생성자 클래스 만들어 사용자가 입력한 자동차 `name`, 레이싱 횟수만큼 움직일수 있는 `position` 담을수 있게 구현

8. `MissionUtils` 라이브러리 이용 랜덤한 넘버 구현하는 함수 구현

9. 랜덤한 숫자 `position` 에 넣어주는 기능 구현

10. 랜덤한 숫자가 `4` 이상일시 전진하고 출력하는 기능 구현

11. `position` Array 요소 토대로 전진상황 출력하는 기능 구현

12. `position` Array 요소들중 4 이상인 수들만 필터링 하는 기능 구현

## 🔍 진행방식

- 미션은 **기능 요구사항, 프로그래밍 요구사항, 과제 진행 요구사항** 세 가지로 구성되어 있다.
- 세 개의 요구사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.

---

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

<br>

### 💻 실행 결과

![실행이미지](images/result.jpg)

<br>

---

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

<br>

## 📝 과제 진행 요구사항

- 미션은 [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) 저장소를 fork/clone해 시작한다.
- **기능을 구현하기 전에 구현할 기능 목록을 정리해 javascript-racingcar-precourse/docs/README.md 파일에** 추가한다.
- **git의 commit 단위는 앞 단계에서 README.md 파일에 정리한 기능 목록 단위로 추가**한다.
- [프리코스 과제 제출](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 문서 절차를 따라 미션을 제출한다.

## ✉️ 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 제출해야 한다.
  - GitHub을 활용한 제출 방법은 [프리코스 과제 제출 문서](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) 를 참고해 제출한다.
- GitHub에 미션을 제출한 후 [우아한테크코스 지원 플랫폼](https://apply.techcourse.co.kr) 에 접속하여 프리코스 과제를 제출한다.
  - 자세한 방법은 [링크](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse#제출-가이드) 를 참고한다.
  - **Pull Request만 보내고, 지원 플랫폼에서 과제를 제출하지 않으면 최종 제출하지 않은 것으로 처리되니 주의한다.**

### 🚨 과제 제출 전 체크리스트 - 0점 방지를 위한 주의사항

- 요구사항에 명시된 출력값 형식을 지키지 않을 경우 기능 구현을 모두 정상적으로 했더라도 0점으로 처리된다.
- 기능 구현을 완료한 뒤 아래 가이드에 따라 테스트를 실행했을 때 모든 테스트가 성공하는 지 확인한다. **테스트가 실패할 경우 0점으로 처리되므로, 반드시 확인 후 제출한다.**

### ✔️ 테스트 실행 가이드

- 테스트 실행에 필요한 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
// {폴더 경로}/javascript-racingcar-precourse/ 에서
npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
// {폴더 경로}/javascript-racingcar-precourse/ 에서
npm run test
```

- 아래와 같은 화면이 나오며 모든 테스트가 pass한다면 성공!

![테스트 결과](./images/test_result.png)
