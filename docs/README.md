<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🎯 구현할 기능 목록
### 0. `eslint` 설정
- `airbnb` 컨벤션 적용

### 1. `Car`객체 생성
- 각 인스턴스마다 이름과 이동 횟수를 저장할 수 있도록 구현
```
class Car {
  constructor(name) {
    this.name = name;
    this.move = 0;
  }
}
```

### 2. 자동차 이름 `확인` 클릭 이벤트
- `,`를 기준으로 이름 구분
- **사용자의 혼란을 야기할 수 있는 자동차 이름 중복 예외처리 추가**
``` 
이름이 5자 이하인가?
중복된 이름이 있는가?
```
- 조건 모두 충족되면 
    - 확인 버튼 비활성화
- 조건이 하나라도 충족되지 않으면
    - alert를 통해 잘못된 부분 알림
    - input 초기화

### 3. 시도 횟수 `확인` 클릭 이벤트
```
입력이 모두 숫자인가?
```
- 모두 숫자라면
    - 게임 진행
    - 확인 버튼 비활성화
- 숫자가 아니라면
    - alert를 통해 잘못된 부분 알림
    - input 초기화

### 4. 게임 진행
- 입력받은 이름에 해당하는 `Car`객체 생성
- `Random.pickNumberInRange`를 이용하여 난수 생성
- 난수에 따라 각 `Car`객체의 이동 증가
- 모든 `Car`의 이동상황 출력
- 시도 횟수만큼 반복

### 5. 우승자 도출
- `Car`객체를 `move`에 따라 정렬
- 가장 `move`가 큰 객체 확인
- 동점자 파악

### 6. 우승자 출력
- 우승자 리스트를 `, `로 구분하는 문자열 생성
- 결과 태그에 출력

## 🔍 폴더구조

```plaintext
├── ...
├── index.html
├── .eslintrc.js // eslint 
├── docs
│   └── README.md
└── src
    ├── index.js 
    ├── car
    │   └── index.js // car 클래스 
```
