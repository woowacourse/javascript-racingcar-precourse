<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 파일 구조

```
- docs
   |- README.md : 구현할 기능 목록 파일
- src
   |- car.js : 자동차 클래스
   |- constants.js : 상수 선언 파일
   |- index.js : 게임 시작 클래스
   |- userInput.js : 사용자 입력 다루는 클래스
   |- view.js : Racing 상황, 결과 출력 클래스
```

## 🎯 구현할 기능 목록

1. 자동차 이름 입력 받기
   - , 기준으로 입력 받기
   - 이름이 5글자 이하
   - 이름 앞 뒤의 공백 제거
   - 이름 중복 검사
2. 자동차 전진 하기
   - 0 ~ 9 랜덤 값 구하기(MissionUtils 라이브러리 사용)
   - 4이상인 경우 해당 자동차 전진
   - 시도할 횟수만큼 전진 가능
3. 시도할 횟수 입력 받기
   - <del>자동차 이름이 없는 경우 에러 출력</del>
   - 자동차 이름 검사가 통과했는지 확인(위 기능 대체)
   - 0 이하의 수가 들어올 경우 에러 출력
4. 자동차 레이싱 표시
   - 시행 횟수만큼 순차적으로 자동차 표시
5. 레이싱 우승자 판단
   - 전진 수를 비교해 우승자 판단
6. 레이싱 우승자 표시
   - span 태그 만들어서 표시
7. 재시작 하는 경우
   - 이전 결과 초기화
   - 자동차 전진 초기화
   - 자동차 이름을 바꾸고 확인을 안 누른 경우 확인
