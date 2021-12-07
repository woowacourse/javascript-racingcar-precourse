## 🏎 기능 이용방법
1. 첫 번째 입력창에 경주할 자동차 이름을 쉼표(,)로 구분해서 입력하고 확인을 눌러주세요.
    - 각 자동차의 이름의 앞뒤 공백은 제거돼서 저장이 됩니다.
2. 두 번째 입력창에 레이싱 횟수를 입력하고 확인을 눌러주세요.
3. 레이싱을 다시 진행하고 싶다면, 1번 과정부터 다시 수행해 주세요.

<br>

## 🛠 환경 설정
1. 테스트를 위한 cypress 설치
2. eslint와 prettier 설치
<br>

## 💻 구현할 기능 목록
### 1. index.html에 DOM 선택자 지정하기
- DOM을 조작하기 위해 엘리먼트에 선택자 지정
- DOM 선택자 지정 목록
    - 자동차의 이름을 입력하는 input 태그의 id: `car-names-input`
    - 자동차의 이름을 제출하는 button 태그의 id: `car-names-submit`
    - 레이싱 횟수를 입력하는 input 태그의 id: `racing-count-input`
    - 레이싱 횟수을 제출하는 button 태그의 id:  `racing-count-submit`

### 2. 각 자동차 이름 입력받기
- id가 `car-names-submit` 인 button에 `onclick` 이벤트 핸들러 등록
- 입력된 각 자동차의 이름(쉼표(,)로 구분된 문자열)의 앞뒤 공백 제거
- 사용자가 잘못된 값을 입력했을 경우 alert 메서드 호출
- 예외 처리 항목
    - 입력된 자동차의 이름 중 5자 이상인 이름이 있는 경우
    - 입력된 자동차의 이름 중 ''(빈 문자열)이 있는 경우
    - 입력된 자동차의 이름 중 중복된 이름이 있는 경우
- 입력이 올바를 경우, 입력받은 자동차의 이름들을 Car 객체의 인스턴스에 저장

### 3. 레이싱 횟수 입력받기
- id가 `racing-count-submit` 인 button에 `onclick` 이벤트 핸들러 등록
- 사용자가 잘못된 값을 입력했을 경우 alert 메서드 호출
- 예외 처리 항목
    - 저장된 자동차 인스턴스가 없는 경우
    - 입력된 레이싱 횟수가 자연수가 아닌 경우
- 입력이 올바를 경우, 게임 진행 함수를 호출

### 4. 게임에 필요한 DOM 엘리먼트 삽입하기
- 게임에 필요한 DOM 엘리먼트를 id가 `app`인 div 엘리먼트의 자식 노드로 삽입
- 삽입할 DOM 엘리먼트 목록
    - 실행 결과를 보여줄 div 엘리먼트
    - '최종 우승자' 텍스트를 보여줄 span 엘리먼트
    - 최종 우승자를 출력하는 id가 `racing-winners`인 span 엘리먼트

### 5. 게임 진행하기 기능 구현
- 입력한 레이싱 횟수만큼 게임 세트(SET)을 진행
- 세트 별로 각 자동차의 전진 여부를 결정
    - 각 자동차의 전진 여부는 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange` 의 함수를 이용해서 결정
    - 해당 함수를 이용해서 0부터 9사이의 숫자 중 하나를 무작위로 선택한 후 결과가 4 이상이면 자동차를 전진시킴
- 현재 세트까지 자동차의 누적 이동 현황을 출력
- 각 세트의 누적 이동 현황을 줄바꿈으로 구분
- 마지막 세트까지 진행 후 최종 우승자를 선정
    - 최종 우승자로 가장 많이 전진한 자동차를 선정
    - 중복 우승자가 발생할 수 있음
    - 최종 우승자를 id가 `racing-winners`인 span 엘리먼트에 출력

### 6. 게임 재시작을 위한 초기화 기능 구현
- 최종 우승자까지 선정 후 저장된 Car 인스턴스를 초기화하는 기능 구현
- 게임 재시작 시 이전 실행 결과를 초기화 시키는 기능 구현
    - 게임 재시작은 한 번의 게임이 종료된 후, 다시 `racing-count-submit` button 태그를 눌렀을 때를 의미

<br>

## 🗂 프로젝트 구조

```bash
├─docs
│  └─README.md
│  
├─images 
│  ├─racingcar_icon.png
│  ├─result.gif
│  ├─result.jpg
│  └─test_result.png
│
├─src
│  ├─class // App.js에서 사용하는 Class를 저장한 디렉터리
│  │  ├─Car.js
│  │  └─Render.js
│  │
│  ├─component // component를 저장한 디렉터리
│  │  ├─CarNameForm.js
│  │  ├─Form.js
│  │  └─RacingCountForm.js
│  │
│  ├─constant // 상수를 저장한 디렉터리
│  │  ├─error.js
│  │  ├─game.js
│  │  └─selector.js
│  │
│  ├─utils // 공용으로 사용하는 함수를 저장한 디렉터리
│  │  └─validation.js
│  │
│  ├─App.js
│  │
│  └─index.js
│
├─test
│  └─app.spec.js
│
├─.eslintrc.json 
├─.gitignore
├─.npmrc
├─.prettierrc.json
├─cypress.json
├─index.html
├─LICENSE
├─package-lock.json
├─package.json
└─README.md
```
