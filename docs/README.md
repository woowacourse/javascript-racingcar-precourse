<h1 align="middle">🏎️ 자동차 경주 게임</h1>

## 👀 게임 설명
자동차 경주 게임은 자동차의 이름을 쉼표로 구분해서 입력받은 후에 랜덤한 확률로 앞으로 가기를 해서 가장 멀리 간 사람이 이기는 게임입니다.

## 📃 기능 목록
> 미션으로 주어진 기능 요구사항, 프로그래밍 요구사항을 반영하여 구현할 기능 목록을 만들었습니다.<br>
> 체크박스 이모지를 클릭하면 관련 프로그래밍 요구사항이 나타납니다.

### 💬 &nbsp;사용자 입력

- [x] 사용자의 자동차 이름, 반복할 횟수를 입력받는다.
- [x] 자동차 이름 입력값 유효성 검사를 한다.
  - [x] 사용자 입력을 쉼표로 구분해서 자동차 이름으로 한다.
  - [x] 각 자동차 이름이 5자 이하인지 검사한다.
  - [x] 쉼표가 맨 앞이나 뒤에 있을 때 에러로 처리한다.
  - [x] 이름에 스페이스가 있을 경우 에러로 처리한다.
- [x] 입력이 잘못된 경우 `alert`로 경고한다.
  - [x] 둘 중의 하나의 입력값만 있는 경우도 포함한다.
<details>
  <summary>✅ &nbsp;DOM 선택자 id</summary>
  <ul>
    <li>자동차의 이름을 입력하는 input 태그는 car-names-input id값을 가진다.</li>
    <li>자동차의 이름을 제출하는 button 태그는 car-names-submit id값을 가진다.</li>
    <li>레이싱 횟수를 입력하는 input 태그는 racing-count-input id값을 가진다.</li>
    <li>레이싱 횟수을 제출하는 button 태그는 racing-count-submit id값을 가진다.</li>
    <li>최종 우승자를 출력하는 span 태그는 racing-winners id값을 가진다.<br>
      예) &#60;span id="racing-winners"&#62;poco,park,jun&#60;/span&#62;</li>
  </ul>
</details>

### 🎯 &nbsp;자동차 경주 게임

- [x] 사용자 입력값에 따라 자동차 객체를 생성한다.
  <details>
    <summary>✅ &nbsp;게임 <code>Car</code> 객체 생성</summary>
    <ul>
      <li>다음과 같이 Car 객체를 만들고, <code>new</code>를 이용해 인스턴스를 만들어 사용한다.</li>
        <pre><code>function Car(name) {
    this.name = name;
  }
  class Car {
    constructor(name) {
      this.name = name;
    }
  }</code></pre>
      </li>
    </ul>
  </details>
- [x] 0 ~ 9 랜덤한 수를 생성해서 4보다 크면 전진한 후 객체의 position을 증가하여 현 위치를 저장한다.
  <details>
    <summary>✅ &nbsp;랜덤 값 생성</summary>
    <ul>
      <li>랜덤 값 생성은 <a href="https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils"><code>MissionUtils</code> 라이브러리</a>의 <code>Random.pickNumberInRange</code>를 사용한다.</li>
    </ul>
  </details>
- [x] 자동차 객체의 이름과 함께 현재 위치를 포함하여 결과를 출력한다.
- [x] 위 두 과정을 반복할 횟수만큼 반복한다.
- [x] 자동차들 중 가장 많이 전진한 자동차(들)를 선정한다.
- [x] 우승자 결과를 화면에 보여준다.
