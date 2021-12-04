<h1 align="middle">🏎 자동차 경주 게임</h1>

## ✅ 기능 목록

- ### 개발 환경 설정
  - [x] linter와 code formater 환경 설정
- ### HTML 선택자 지정
  - [x] 각 요소에 id값 입력
- ### 스크린 숨기기
  - [x] (자동차 이름이 등록되기 전까지) 횟수 입력창, 결과값 화면을 숨긴다
- ### 자동차 이름 입력
  - [x] 자동차 이름 유효성 검사
    - [x] 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다
    - [x] 공백이 포함 되면 안된다
    - [x] 조건이 안맞으면 alert 메세지를 보여준다
  - [x] 자동차 이름별 객체 만들기
    - [x] 이름과 카운트별로 객체를 저장한다
- ### 시도할 횟수 입력
  - [x] 자동차 이름이 입력되면 횟수 입력창을 보여준다
  - [x] 1 이상 숫자를 입력해야 한다
  - [x] 조건이 안맞으면 alert 메세지를 보여준다
- ### 입력받은 횟수 만큼 자동차 경주
  - [x] 각 객체별 랜덤 값 생성 (0~9)
  - [x] 4 이상일 경우 카운트값 증가 (전진하는 횟수)
- ### 결과값 출력
  - [x] 결과값을 보여줄 div 태그를 추가한다
  - [x] 결과값 element를 만들어서 항목에 추가한다
  - [x] 경주 결과값을 차례대로 출력한다
  - [x] 최종 우승자 선정
    - [x] 최대 카운트 숫자를 확인 한다
    - [x] 우승자가 여러 명일 경우 쉼표(,)를 이용하여 출력한다
    - [x] 최종우승자 span 태그에 id값 입력
    - [x] '최종우승자' 문자열에 span 태그 추가

<br>

## 🗂 src 폴더 구조

```bash
📦src
┣ 📂game
┃ ┣ 📜addSelectedWinner.js
┃ ┣ 📜playCarRacing.js
┃ ┗ 📜startRacingGame.js
┣ 📂init
┃ ┣ 📜cars.js
┃ ┗ 📜setScreen.js
┣ 📂input
┃ ┣ 📜handleCarNames.js
┃ ┗ 📜handleRacingCount.js
┣ 📂utils
┃ ┣ 📜constant.js
┃ ┗ 📜setAttribute.js
┗ 📜index.js
```
