## 📌 구현할 기능 목록

1. 자동차 이름 입력받기
   - , 로 구분하기
   - [예외] 5자 이하로 제한
   - [예외] 공백만 입력시 alert
   - [예외] 자동차 이름이 공백일 경우
   - 시도할 횟수 보이게 만들기
2. 시도할 횟수 입력받기
   - 실행결과 출력
3. 자동차를 전진 또는 정지 시키기
   - 4이상 시 전진하기
   - round 별 전진 수 구하기
4. 실행결과 출력
   - 라운드 별 전진 결과 출력
     - 시도할 횟수를 입력받을 때마다, 매번 새로운 결과 출력
   - 가장 많이 전진한, 최종 우승자 출력
     - 동점일 경우, 쉼표로 구분하여 출력

<br>

## 📌 리팩토링 목록

1. util 함수 분리
2. MVC 패턴에 따라 class 분리
3. constant 상수 분리

<br>

## 🎬 프로젝트 시연

![화면 기록 2021-12-07 오후 7 41 17](https://user-images.githubusercontent.com/24906022/145014945-6024e0f7-c590-465f-a5e5-fa7d8c6919ff.gif)

<br>

## 📂 디렉토리 구조

```sh
┣ src
┃   ┣ controller
┃   ┃ ┗ RacingCarController.js
┃   ┣ model
┃   ┃ ┣ Car.js
┃   ┃ ┗ RacingCarModel.js
┃   ┣ utils
┃   ┃ ┣ constant.js
┃   ┃ ┣ dom.js
┃   ┃ ┣ parse.js
┃   ┃ ┗ validity.js
┃   ┣ view
┃   ┃ ┗ RacingCarView.js
┃   ┗ index.js
┣ docs
┃   ┗ README.md
┣ .eslintrc.json
┣ .prettierrc.json
┗ index.html
```

<br>

## ⚒️ About skills

- eslint + prettier
- MVC 패턴으로 클래스 분리
- JavaScript NHN 코딩 컨벤션 준수
