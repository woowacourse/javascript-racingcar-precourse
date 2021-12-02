<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🎯 구현할 기능 목록
### 0. `eslint` 설정
- `airbnb` 컨벤션 적용
- `MissionUtils`에서 발생하는 `no-undef` 의 예외처리

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

### 2. 게임 초기화 기능
- 시도 횟수 `확인` 버튼을 비활성화
- `<div id="app">`에 실행결과 출력을 위한 `<div id="result">` 추가

### 3. 자동차 이름 `확인` 클릭 이벤트
- `,`를 기준으로 이름 구분
- **사용자의 혼란을 야기할 수 있는 자동차 이름 중복 예외처리 추가**
``` 
이름이 5자 이하인가?
중복된 이름이 있는가?
```
- 조건 모두 충족되면 
    - 자동차 이름 확인 버튼 비활성화
    - 시도 횟수 확인 버튼 활성화
- 조건이 하나라도 충족되지 않으면
    - alert를 통해 잘못된 부분 알림
    - input 초기화

### 4. 시도 횟수 `input` keyup 이벤트
- `input type="number"`이지만 '+', '-', 'e', 한 글자 한글이 입력 가능한 상태이므로 이에 대한 예외처리 적용
- 위의 문자가 들어올 시 공백으로 변경

### 5. 시도 횟수 `확인` 클릭 이벤트
```
입력이 모두 숫자인가?
```
- 모두 숫자라면
    - 게임 진행
    - 시도 횟수 확인 버튼 비활성화
- 숫자가 아니라면
    - alert를 통해 잘못된 부분 알림
    - input 초기화

### 6. 게임 진행
- 입력받은 이름에 해당하는 `Car`객체 생성
- `Random.pickNumberInRange`를 이용하여 난수 생성
- 난수에 따라 각 `Car`객체의 이동 증가
- 모든 `Car`의 이동 상황 출력
- 시도 횟수만큼 반복

### 7. 우승자 도출
- `Car`객체를 `move`에 따라 정렬
- 가장 `move`가 큰 객체 확인
- 동점자 파악

### 8. 우승자 출력
- 우승자 리스트를 `, `로 구분하는 문자열 생성
- `result` 태그에 출력

## 🔍 폴더구조

```plaintext
├── ...
├── index.html
├── .eslintrc.js // eslint 
├── docs
│   └── README.md
└── src
    ├── car
    │   └── index.js // car 클래스, 관련 메소드
    ├── constants
    │   └── index.js // 상수 모음(alert message, game rule)
    ├── input
    │   └── index.js // 자동차 이름 배열, 시도 횟수 관련 메소드
    ├── utils
    │   ├── add-events.js // 버튼 클릭이벤트, keydown 이벤트 함수 모음
    │   ├── common.js // 선택자, 커스텀 엘리먼트 생성 함수
    │   ├── play-racing.js // 게임 진행관련 함수 모음
    │   └── show-winners.js // 우승자 출력 관련 함수 모음
    └── index.js 
```

## :eyes: 신경 쓴 부분
### 1. 네이밍 컨벤션
> 배열이면 `array`를, input.value이면 `value`를 붙이는 등 네이밍에서 타입을 유추할 수 있도록 하려고 함.  
> 함수 명을 `동사원형+목적어`의 형식을 지키며, 목적어를 구체적으로 작성하여 무엇을 위한 함수인지 유추 가능하도록 작성하려고 함

### 2. 예외처리
> ~~`input type="number"`이지만 `+``-``e`의 입력이 가능한 것을 깨닫고 입력에 대한 예외처리 + 화살표를 통한 조작의 경우를 고려하여 주어진 input value에 대한 예외처리를 진행함.  정규식 사용으로 ~~
> 시도 횟수 입력 부분에 숫자 이외의 값이 들어오면 공백으로 변환
> 자동차 이름을 입력받을 때 이름이 공백인 경우.  
> 시도 횟수를 입력받을 때 공백인 경우.  
> 이름이 `q, w, e` `q,w, e ` 등 공백이 포함된 경우.  
> 자동차 이름이 중복되는 경우.  
