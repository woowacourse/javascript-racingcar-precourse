## 🛠 환경 설정
1. 테스트를 위한 cypress 설치
2. eslint와 prettier 설치

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
- 사용자가 잘못된 값을 입력했을 경우 alert 메서드 호출
- 예외 처리 항목
    - 입력된 자동차의 이름 중 5자 이상인 이름이 있는 경우
    - 입력된 자동차의 이름 중 ''(빈 문자열)이 있는 경우
    - 입력된 자동차의 이름 중 중복된 이름이 있는 경우
    - 입력된 자동차의 이름 중 ' '(공백)으로만 구성된 이름이 있는 경우
- 입력받은 자동차의 이름들을 Car 객체의 인스턴스에 저장

### 3. 레이싱 횟수 입력받기
- id가 `racing-count-submit` 인 button에 `onclick` 이벤트 핸들러 등록
- 사용자가 잘못된 값을 입력했을 경우 alert 메서드 호출
- 예외 처리 항목
    - 입력된 레이싱 횟수가 자연수가 아닌 경우

### 4. 게임 진행하기 기능 구현
- 입력한 레이싱 횟수만큼 게임 세트(SET)을 진행
- 세트 별로 각 자동차의 전진 여부를 결정
    - 각 자동차의 전진 여부는 `[MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange` 의 함수를 이용해서 결정
    - 해당 함수를 이용해서 0부터 9사이의 숫자 중 하나를 무작위로 선택한 후 결과가 4 이상이면 자동차를 전진시킴
- 현재 세트까지 자동차의 누적 이동 현황을 저장
- 마지막 세트까지 진행 후 최종 우승자를 선정
    - 최종 우승자로 가장 많이 전진한 자동차를 선정
    - 중복 우승자가 발생할 수 있음

### 5. 게임 실행 결과 보여주기
- 각 세트의 누적 이동 현황을 보여주기
    - 각 세트의 누적 이동 현황을 줄바꿈으로 구분
- 게임의 최종 우승자를 보여주기
    - id가 `racing-winners` 인 span 태그의 컨텐츠 영역에 최종 우승자를 저장
    - 우승자가 한 명 이상일 경우 ,(쉼표)로 구분

