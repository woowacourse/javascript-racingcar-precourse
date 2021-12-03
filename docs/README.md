<p align="middle" >
  <img width="100px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🎮 프로그램 설명

사용자의 입력한 이름의 자동차들이 사용자가 입력한 횟수만큼 이동하여 누가 우승했는지 출력하는 프로그램

---------

## 📝 기능 목록

### 1. 사용자 입력 처리
1. 자동차 이름
    - 쉼표(,)로 구분하기
    - 1 ~ 5자
    - 중복 이름 입력 불가
2. 시도할 횟수
    - 숫자만 가능
3. 입력이 잘못 들어왔을 경우 `alert`
4. 입력이 들어오면 실행결과 초기화

### 2. 자동차 경주
1. 자동차 경주 진행
    - `MissionUtils` 라이브러리의 `Random.pickNumberInRang` 사용하여 0 ~ 9사이의 값을 랜덤하게 구함
    - 무작위 값이 4 이상일 경우 전진 횟수 추가
    - 각 자동차의 이름과 전진한 횟수만큼 - 출력
2. 자동차 경주초기화
    - 자동차들 중 전진 횟수가 가장 많은 자동차의 이름를 출력
    - 전진 횟수가 가장 많은 자동차가 여러대일 경우 쉼표(,)로 구분하여 출력
