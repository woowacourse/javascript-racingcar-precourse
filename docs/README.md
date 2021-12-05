<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>
> 자동차들과 경기 횟수를 입력받아 경기 결과와 최종 우승자를 보여주는 자동차 경주 게임입니다.

---
## 1️⃣ 구현기능
<br>

- 처음에 자동차 이름을 입력받는 input창만 나타나도록 구현
- 자동차 이름을 입력받고 잘못된 입력일 경우 alert 띄우도록 구현
- 자동차 이름을 입력받고 옳은 입력일 경우 시도 횟수 input창이 나타나도록 구현
- 시도 횟수를 입력받고 잘못된 입력일 경우 alert 띄우도록 구현
- 시도 횟수를 입력받고 옳은 입력일 경우 실행 결과창이 나타나도록 구현
- 자동차 이름과 시도횟수를 다시 검증한 후 잘못된 입력일 경우 alert 띄우도록 구현
- 시도횟수 만큼의 경기 결과를 출력한 후, 마지막에 최종우승자를 출력하도록 구현
- 새로운 게임을 시작하면 이전 경기 결과 및 최종우승자를 지워주도록 구현

---
## 2️⃣ 구현할 기능 목록 작성
<br>

### TODO 자동차 이름 입력받기
- [X] 자동차 n대의 이름을 ','로 구분하여 입력받기
- [X] 잘못된 입력이 들어왔을 때 확인버튼을 누를 시, alert 띄우기
    - [X] 자동차의 이름이 5자 초과
    - [X] 자동차 이름에 중복이 존재
    - [X] 자동차가 1대 이하
    - [X] 자동차의 이름이 공백
    - [X] ','뒤에 자동차 이름이 입력되지 않음
<br>

### TODO 시도횟수 입력받기
- [X] 자동차 이름을 입력받은 후 시도횟수를 입력받기
- [X] 자동차 이름, 시도횟수 둘 중 하나라도 잘못된 입력이 들어왔을 때 확인버튼을 누를 시, alert 띄우기
    - [X] 시도 횟수 입력이 공백일 경우
    - [X] 시도 횟수 입력된 모든 문자가 숫자가 아닐경우
    - [X] 시도 횟수 입력된 숫자가 1이상의 수가 아닐경우
    - [x] 자동차 입력이 위 문단의 입력예외와 같은 경우
<br>

### TODO 결과 출력하기
- [X] 입력받은 자동차들이 시도횟수만큼 전진 또는 정지한다.
    - [X] 각 자동차 별로 0~9의 랜덤한수를 생성한다
    - [X] 해당 수가 4이상일 경우 해당 자동차가 전진한다
- [X] 한 차례 시도가 끝날 때마다 결과를 출력한다.
- [X] 시도횟수만큼의 반복이 끝났을 떄 가장 많이 전진한 자동차를 최종 우승자로 출력한다.
- [X] 다시 게임을 시작하면 이전 결과를 지워준다.
<br>

---
## 3️⃣ 디렉토리 구조
<br>

```
│  .eslintrc.js
│  .gitignore
│  .npmrc
|  .prettierrc.js
│  cypress.json
│  index.html
│  LICENSE
│  package-lock.json
│  package.json
│  README.md
│
├─docs
│      README.md
│  
├─images
│      racingcar_icon.png
│      result.gif
│      result.jpg
│      test_result.png
│
├─src
│  ├─js
│  │
│  |
│  ├─class
│  │     car.js
│  │      
│  │
│  ├─util
│  │     dom.js
│  │
│  ├─constants
│  |     constant.js
│  |
|  |
|  ├─getCarName.js
|  |
|  ├─getRacingCount.js
|  |
|  ├─index.js
|  |
|  ├─playGame.js
|  |
|  └─render.js
|
└─test
        app.spec.js
```
<br>
