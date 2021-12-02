<h4><i>자동차 경주 게임</i></h4>

## 구현 기능 목록

### Eslint와 Prettier 을 통한 규칙 적용

### 자동차 *Car* Class 구현

1. [ ] `Car` class의 생성자는 `name` 을 받도록 구현 - `name`은 5글자 이하만 가능
2. [ ] 전진 유무를 판단하는 `isMove` Private Method 구현
3. [ ] 전진 시도를 수행하는 `tryMove` Method 구현
   - [ ] `tryMove` Method 에서는 `isMove` 함수를 호출 후, <br/>
            함수 반환값이 true면 전진 false면 멈춤 동작을 수행
   - [ ] 전진하면 `move` 값을 1 증가시킴

### 이벤트 처리

1. 자동차 이름 목록을 입력하는 `car-names-input` change 이벤트 등록
   - [ ] 입력하는 값을 `carNames`에 저장
2. 자동차 이름 목록을 적용하는 `car-names-submit` click 이벤트 등록
   - [ ] `carNames` 문자열을 콤마(,) 를 기준으로 분리하여 `carNameList` 배열에 저장
   - [ ] `carNameList`에 저장된 자동차 이름 목록 `item`이 유효한지 검사
     - 유효하지 않다면 alert를 통해 메시지 출력 후, 멈춤
     - 유효하지 않은 경우
       - `item`이 빈 문자열일 경우
       - `item`이 5글자를 초과한 경우
       - ? `item`중 중복된 이름도 유효하지 않음으로 쳐야하나
     -
3. 시도할 횟수를 입력하는 `racing-count-input` change 이벤트 등록
   - [ ] 입력하는 값을 `tryCount`에 저장
4. 시도할 횟수를 적용하는 `racing-count-submit` click 이벤트 등록
   - [ ] `tryCount`의 값이 유효한지 확인 (숫자가 아니거나, 빈 값)
   - [ ] `carList`의 길이가 1 이상인지 확인
   - [ ] 두 조건 중 하나라도 유효하지 않다면 alert를 통해 안내 메시지 출력 후, 멈춤
   - [ ] `carList`의 item을 순회하며 `tryCount` 횟수만큼 `item.tryMove()` 호출
   - [ ] `racingResult` 에 `carList`의 데이터 Update ( racingResult.setState(carList) )

### racingResult Class 구현

> 결과 화면을 출력하는 class

1. [ ] `racingResult` class의 생성자는 결과 특정 element의 id를 받음
2. [ ] 아래와 같은 name과 type을 가지는 데이터 초기화
```typescript
moveList    : { name : string, move : number } [ ]
winnerList  : string [ ]
```
3. [ ] 최종 우승자 목록을 반환하는 `getWinners` 함수를 구현
5. [ ] 데이터를 업데이트 하고 `render`를 호출하는 `setState` Method 구현
6. [ ] 현재 데이터를 DOM에 반영하는 `render` Method 구현

| 날짜 | 변경 내용 |
|---|---|
| 12.02 | 전반적인 구현 기능 목록 작성 |