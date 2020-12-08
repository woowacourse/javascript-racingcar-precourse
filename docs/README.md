# 🏎️ 자동차 경주 게임

> 우아한테크코스 프리코스 2주차 미션
>
> **제출자: 강현영**

* 자동차의 이름과 시도할 횟수를 입력하면, 자동차 경주 실행 결과와 우승자를 알려주는 게임 프로그램 구현하기

<br>

## 🎯 구현할 기능 목록

1. **자동차 이름 입력값 받는 기능** 
   * [예외사항] 쉼표가 아닌 다른 특수문자가 함께 입력될 경우
   * [예외사항] 이름의 길이가 5보다 클 경우
   * [예외사항] 중복되는 이름이 있을 경우
   * [예외사항] 이름이 하나일 경우
2. **예외 문자 유무 확인 기능** 
   * 정규식으로 예외 문자 체크
3. **이름 길이 확인 기능**
4. **중복 이름 확인 기능**
5. **시도 횟수 입력값 받는 기능**
6. **random 값 생성 기능**
   * [예외사항] 숫자가 0일 경우
   * [예외사항] 입력값을 바꾸고 버튼을 다시 누를 경우
7. **시도 횟수 입력값 확인 기능**
8. **random 값 생성 기능**
   * 0에서 9사이의 숫자
9. **Car 객체**
10. **Car 객체 생성 기능** 
11. **시도 횟수 입력값만큼 게임하는 기능**
12. **random 값 비교 후 과정 출력하는 기능**
    * 전진하는 자동차를 출력할 때 자동차 이름 같이 출력
13. **실행 결과 최대값 찾는 기능**
14. **우승자 찾는 기능** 
15. **우승자 출력 기능**
    * 우승자가 여러명일 경우 쉼표를 이용하여 구분
16. **실행 결과 초기화 기능**
    * 시도 횟수 입력값을 바꾸고 버튼을 눌렀을 경우
      * 이미 진행한 실행 결과가 있다면, 새로운 실행 결과값을 보여줄 수 있도록 초기화

<br>

## ⚙️ 모듈

### index.js

> 자동차 경주 게임을 시작하는 js 파일

* `RacingCarGame()`
  * `init()`
    * `getCarNamesInput()`
    * `getRacingCountInput()`

### car.js

> 입력받은 자동차 이름으로 각각의 자동차를 생성하기 위한 Car 객체 js 파일

* `class Car`: Car 객체

### input.js

> 자동차의 이름 입력값과 시도 횟수 입력값을 받는 js 파일

* `getCarNamesInput()`: 자동차 이름 입력값 받는 기능
* `getRacingCountInput()`: 시도 횟수 입력값 받는 기능

### check.js

> 자동차의 이름 입력값과 시도 횟수 입력값이 사용 가능한지 확인하는 js 파일

* `isSpecialCharacter()`: 예외 문자 유무 확인 기능
* `isAvailableLength()`: 이름 길이 확인 기능
* `isDuplicated()`: 중복 이름 확인 기능
* `isAvailableNames()`: 예외 문자 유무, 이름 길이, 중복 이름을 한번에 체크하는 기능
* `isAvailableNumber()`: 숫자가 1 이상인지 확인하는 기능
* `makeResultEmpty()`: 실행 결과가 있는지 확인 후 있다면 초기화 하는 기능

### create.js

> 생성하는 함수를 모아놓은 js 파일

* `createRandomNumber()`: random 값 생성 기능
* `createCar()`: Car 생성 기능

### game.js

> createCar()에서 각각의 자동차를 생성한 후 시도 횟수 입력값만큼 경주를 하는 js 파일

* `racingCountPlay()`: 시도 횟수 입력값만큼 게임하는 기능
* `printProgress()`: random 값 비교 후 과정 출력하는 기능
* `findMaxResult()`: 실행 결과 최대값 찾는 기능
* `findWinner()`: 우승자 찾는 기능
* `printWinner()`: 우승자 출력 기능

<br>

## 📁 디렉토리

* `javascript-racingcar-precourse`
  * `docs`
    * README.md
  * `images`
    * result.gif
    * result.jpg
  * `src`
    * car.js
    * check.js
    * create.js
    * game.js
    * index.js
    * input.js
  * index.html
  * LICENSE
  * README.md
