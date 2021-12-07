<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임 기능 목록</h1>

## 🎯 구현 기능 목록

#### 자동차 이름 입력

- [x] 유저가 자동차 이름 입력 창에 이름을 입력하고 확인 버튼을 누르면 자동차 이름들을 입력 받는다.
  - [x] 이름이 5자 초과이면 alert을 띄워 다시 입력할 수 있게 한다.
  - [x] 이름이 없다면 alert을 띄워 다시 입력할 수 있게 한다.
  - [x] 중복된 이름이 있다면 alert을 띄워 다시 입력할 수 있게 한다.

#### Car 객체 정의

- [x] Car 객체를 정의한다.
  - [x] `MissionUtils` 라이브러리의 `Random.pickNumberInRange`를 사용하여 0-9사이의 수를 얻는다.
  - [x] 얻은 값이 4 이상일 경우 전진한다.

#### 레이싱 횟수 입력

- [x] 유저가 레이싱 횟수 입력 창에 숫자를 입력하고 확인 버튼을 누르면 레이싱 횟수를 입력 받는다.
  - [ ] 자동차 이름을 입력 받지 않은 경우라면 alert을 띄워 자동차 이름을 입력 받도록 한다.
  - [x] 숫자가 아닐 경우 alert을 띄워 다시 입력할 수 있게 한다.

#### 레이싱 하기

- [ ] 유저가 레이싱 횟수 입력 확인 버튼을 누르면 입력된 레이싱 횟수만큼 레이싱을 한다.
- [ ] 매 레이싱마다의 결과를 저장한다.

#### 결과 출력

- [ ] 레이싱이 끝나면 결과를 출력한다.
- [ ] 레이싱이 끝나면 최종 우승자를 찾는다.
- [ ] 최종 우승자를 <span id="racing-winners">에 담아서 출력한다.
