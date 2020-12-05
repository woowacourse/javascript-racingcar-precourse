# 🚀 구현 기능 목록

## Handler - click에 대한 동작

- [x] 자동차의 이름을 제출하는 button 동작
- [x] 레이싱 횟수을 제출하는 button 동작

## Display - 페이지 출력

- [x] 주어진 요구사항에 따라 HTML tag에 id, class를 추가하여 기능구현 준비를 합니다.
- [x] 올바른 자동차 이름을 input으로 받았을 때 count를 입력받을 Input display & 자동차 이름 Btn 비활성화
- [x] 올바른 이동 횟수를 입력 받았을 때 결과 출력 & 카운트 Btn 비활성화
- [x] 각레이스 결과 출력
- [x] 최종 우승자 출력

## Input - 유저의 값 입력

### 공통기능

- [x] input validation : 빈 입력인 경우
- [x] 잘못된 입력의 경우 alert message & clear input

### 자동차 이름 입력

- [x] 입력받기 : 자동차 n대의 이름을 comma로 구분하여 받음.
  - [x] input validation : 입력받은 자동차 이름에 공백이름이 포함된 경우
  - [x] input validation : 입력받은 자동차 이름 중 5자 초과하는 경우
  - [x] input validation : 입력받은 자동차 이름 중 중복되는 이름이 있는 경우
  - [x] input validation : 이름이 하나만 입력 될 경우

### Count 입력

- [x] 입력받기 : 몇 번의 이동을 할 것인지
  - [x] input validation : 숫자가 아닌 입력의 경우
  - [x] input validation : 1 미만의 숫자의 경우
  - [x] input validation : 소수점이 존재하는 경우

## Race - 경기진행 기능

- [x] Car 객체 생성.
- [x] 0 - 9 사이 랜덤 값 생성하기.
- [x] 랜덤 값에 따라 전진 혹은 정지.
- [x] 각 회차의 레이스 결과 계산하기.
- [x] 비교하기 : 레이스 최종 결과에 따른 우승자는 누구인지

## 그외 개발하며 추가한 사항

- 초기에는 count 입력받는 부분과 result 부분은 보이지 않아야 합니다.
- input validation : 이름이 하나만 입력 될 경우 ( 어차피 그사람이 우승이므로 2명이상부터 진행)
- input validation : 숫자가 아닌입력의 경우 input type이 number라서 자동으로 걸러짐.
- input validation : 음수의 경우가 아니라 1미만의 숫자의 경우 필터링 (0회 진행은 의미없음.)
- race 진행을 위해 input을 readonly로 만들어 수정할 수 없게 만듭니다.
