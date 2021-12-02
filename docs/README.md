# 📝 구현할 기능 목록

- [ ]html 선택자 추가

  - html 엘리먼트를 직접 추가하거나 기존의 html 엘리먼트를 임의로 삭제하지 않는다.
  - 자동차의 이름을 입력하는 input 태그는 car-names-input id값을 가진다.
  - 자동차의 이름을 제출하는 button 태그는 car-names-submit id값을 가진다.
  - 레이싱 횟수를 입력하는 input 태그는 racing-count-input id값을 가진다.
  - 레이싱 횟수을 제출하는 button 태그는 racing-count-submit id값을 가진다.
  - 최종 우승자를 출력하는 span 태그는 racing-winners id값을 가진다.
    - 예) `<span id="racing-winners">poco,park,jun</span>`

- [✅] 자동차 이름 확인 버튼(car-names-submit) 클릭시 자동차 이름(car-name-input)을 가져온다.

- [ ] 자동차 이름(car-name-input)이 잘못된 경우 alert 메시지 전달

  - 예외 1. 이름이 비어있을 경우(공백 문자 등)
  - 예외 2. 자동차 이름에 공백이 들어갈 경우
  - 예외 3. car-name-input에 ,쉼표가 없을 경우
  - 예외 4. 중복된 이름이 입력될 경우 다시 입력할 수 있게 한다.
  - 예외 5. 자동차 이름이 5자를 초과할 경우

- [ ] 자동차 이름 확인 버튼(car-names-submit)을 클릭하지 않고, 시도할 횟수 버튼(racing-count-submit)을 클릭 할경우 alert 메시지 전달

  - focus를 자동차 이름(car-name-input)에 준다.

- [ ]시도할 횟수를 입력후 확인 버튼(racing-count-submit) 클릭시 레이싱 횟수(racing-count-input)를 가져온다.

- [ ]시도할 횟수(racing-count-input)가 잘못된 경우 alert 메시지 전달

  - 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.(시도할 횟수 입력)
  - 예외 1. 자동차 이름 입력후 확인 버튼을 누르지 않았을 경우
  - 예외 2. 시도할 횟수가 공백일 경우

- [ ] 시도할 횟수(racing-count-input), 자동차 이름(car-names-input)이 정상적으로 입력되었을 때 무작위 값 생성(0 ~ 9)

  - 전진하는 조건을 판단하기 위한 랜덤 값은 MissionUtils 라이브러리의 Random.pickNumberInRange를 사용해 구한다.
  - 예외 1. 랜덤 값이 4이상일 경우 전진한다.
  - 예외 2. 랜덤 값이 0 ~ 3일 경우 전진하지 않는다.

- [ ] 시도할 횟수(racing-count-input)만큼, 실행 결과를 보여준다.

  - 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
  - 전진하는 자동차에는 '-'를 붙여 표시해준다.
    - 예) east: -- (두 번 전진할 경우)
  - 횟수 별 간격을 두어 보기 쉽게 만들어 준다.

- [ ] 게임 우승자(racing-winners)를 알려준다.
  - id값은 racing-winners를 갖는 span tag 생성후 우승자 추가
  - '-'가 가장 많은 사람이 게임 우승자이다.
  - 예외 1. 우승자는 한 명 이상일 수 있다.
  - 우승자가 여러명일 경우 ,쉼표를 이용하여 구분한다.
