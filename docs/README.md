<h4><i>🚗자동차 경주 게임</i></h4>

## 🛠 구현 기능 목록

### Eslint와 Prettier 을 통한 규칙 적용

### 게임 진행 구현

1. [x] 이벤트 등록
2. [x] 게임 진행 및 시도 횟수마다 log 저장
3. [x] 우승자 확인
4. [x] 결과 표시

### 자동차 *Car* Class 구현

1. [x] `Car` class의 생성자는 `name` 을 받도록 구현
2. [x] 전진을 시도하는 기능 구현

### 이벤트 처리

1. 자동차 이름 목록을 입력하는 `car-names-input` change 이벤트 등록
   - [x] 입력하는 값을 `input`에 저장
2. 자동차 이름 목록을 적용하는 `car-names-submit` click 이벤트 등록
   - [x] `input` 문자열을 콤마(,) 를 기준으로 분리하여 `carNameList` 배열에 저장
   - [x] `carNameList`에 저장된 자동차 이름 목록 `item`이 유효한지 검사
     - 유효하지 않다면 alert를 통해 메시지 출력 후, 멈춤
     - 유효하지 않은 경우
       - `item`이 빈 문자열일 경우
       - `item`이 5글자를 초과한 경우
   - [x] `carNameList`를 순회하며 자동차 Object 생성
3. 시도할 횟수를 입력하는 `racing-count-input` change 이벤트 등록
   - [x] 입력하는 값을 `tryCount`에 저장
4. 시도할 횟수를 적용하는 `racing-count-submit` click 이벤트 등록
   - [x] `tryCount`의 값이 유효한지 확인 (빈 값, 음수)
   - [x] 유효하지 않다면 alert를 통해 안내 메시지 출력 후, 멈춤
   - [x] 자동차 Object를 순회하며 `tryCount` 횟수만큼 자동차 이동 시도
   - [x] 결과 내용 업데이트

### 결과 화면 컴포넌트 구현

> 아래 형태의 데이터 사용

```typescript
gameHists   : { name : string, move : number } [ ] [ ] // [시도 횟수][차 idx]
winners     : string [ ]
```

1. [x] 게임 진행이 완료되면, 결과 화면을 표시
   - [x] 우승자를 출력하는 기능
   - [x] 게임 로그를 출력하는 기능

| 날짜 | 변경 내용 |
|---|---|
| 12.02 | 전반적인 구현 기능 목록 작성 |
| 12.03 | 기능 내용 단순화, 완료 기능 표시, 기능 추가 |