# 🏎️ 자동차 경주 게임

우아한 테크코스 프리코스 2주차 과제

사용자의 입력(자동차 이름, 이동 횟수)을 받는 자동차 경주를 구현한다.

## 기능 구현 목록

1. 자동차 이름 입력 받기
   1. 쉼표 기준으로 구분
2. 자동차 이름 입력 검증하기
   1. 예외 시, alert메시지 후 재입력
   2. [예외] 입력이 공백일 때
   3. [예외] 이름이 5자를 넘겼을 때
   4. [예외] 이름이 공백일 때(ex. east,,south)
3. 올바른 자동차 이름 입력이면, 시도할 횟수 입력창 render하기
4. 시도할 횟수 입력 받기
5. 시도할 횟수 입력 검증하기
   1. 예외 시, alert메시지 후 재입력
   2. [예외] 공백일 때
   3. [예외] 횟수가 0일 때
6. 게임데이터 설정하기
7. 실행결과 출력하기
   1. 각 이동 당 전진 여부: 0-9사이 랜덤값 추출, 4 이상 전진
8. 최종 우승자 연산하기
9. 최종 우승자 출력하기
   1. 여러 명일 경우 콤마(,)를 이용하여 구분

## 주의사항

- **함수(또는 메소드)의 길이가 15라인을 넘어가지 않도록 구현한다.**
  - 함수(또는 메소드)가 한 가지 일만 잘 하도록 구현한다.
- 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
