# 🏎️ 자동차 경주 게임

## 소개

<br/>

자동차의 이름들을 입력 받으면, 그 자동차들이 경주하는 시뮬레이션을 수행하여 우승자를 보여주는 간단한 시뮬레이션 게임입니다(참고로, 우승자는 여러명일 수 있습니다). 이때 모든 자동차들은 조금 특수한(?) 자동차들이라서 앞으로 움직이고 싶다면 엑셀을 매번 새로 밟아서 앞으로 나아가기를 '시도'해야 합니다. 공평성을 위해서 자동차들은 모두 똑같은 시도 횟수를 가집니다. 이 시도 횟수는 여러분이 지정해주실 수 있습니다. 따로 정해진 도착지점은 없으며 우승은 가장 멀리 앞으로 나아간 자동차에게 주어집니다. 참고로, 단순히 경주 결과뿐만 아니라 경주의 진행 과정 또한 보실 수 있습니다.
<br/><br/><div style="text-align: right"> 게임 실행법 : index.html 을 브라우저로 열기 </div>
<br/><br/>

## 구현 기능 목록

<br/>

### 1. 입력 처리 및 유효성 검사

<br/>

- 자동차 이름 입력값을 바탕으로 자동차 이름 리스트 얻기 (get car name list from car names input)

  - 예외#1 :exclamation: - 자동차 이름 중 5글자가 넘어가는 이름이 있는 경우
  - 예외#2 :exclamation: - 자동차 이름이 단 하나만 입력되었을 경우
  - 예외#3 :exclamation: - 이름이 중복되는 차가 있을 경우
  - 예외#4 :exclamation: - 이름 구분자(,) 이후 이름이 없거나 이름의 앞 뒤에 공백을 입력한 경우 ex) ', north , west, '

  - 예외 #4 해결 :wrench: - 이름 구분자를 바탕으로 자동차 이름 배열 생성. 이름 각각의 양쪽 끝 공백 제거

- 자동차 이름 입력값 유효성 검사 (check car names input)

  - 예외 #1,#2,#3 해결 :wrench: - 자동차 이름 입력의 어디가 유효하지 않은지를 검사

- 시도 횟수로 입력을 바탕으로 시도 횟수 값 얻기 (get tryCount value from try count input)

  - 예외#4 :exclamation: - 유저가 number input 태그의 숫자 올림, 내림 버튼으로 음수 또는 0을 입력할 때
  - 예외#5 :exclamation: - 유저가 number input 태그의 숫자 올림, 내림 버튼을 이용하지 않고 수동으로 음수, 0, 혹은 자연수가 아닌 양수를 입력으로 입력하는 경우

- 시도 횟수 유효성 검사 (check try count input)
  - 예외 #4,#5 해결 :wrench: - number input 태그의 입력 최소값을 1로 설정, 잘못된 입력인지를 검사

<br/><br/>

### 2. 경주 수행하기

<br/>

- 차들과 경주장을 생성하기 (create cars & raceCourse)

  - :exclamation: 예외#6 - 이름은 입력했지만 '확인' 버튼을 누르지 않아 이름들이 등록되지 않은 경우

- 경주 진행하기 (play race game)
  - :exclamation: 예외#7 - 입력이 올바르지 않은 상태에서 경주를 진행하려고 하는 경우

<br/><br/>

### 3. 경주 결과 보여주기

<br/>

- 자동차 이름들 & 시도 횟수 입력값이 유효하지 않을 경우 경고창 띄우기 (alert invalid inputs)

  - :wrench: 예외#6 해결 - 차 이름들이 새로 입력되었는데 '확인' 버튼이 눌러지지 않았다면 경고창 띄우기
  - :wrench: 예외#7 해결 - 시도 횟수 입력이 잘못된 입력인지를 검사 후 '0보다 큰 자연수'를 입력할 것을 유저에게 알려주기
  - :wrench: 예외#7 해결 - 자동차 이름 입력의 어디가 유효하지 않은지를 유저에게 알려주어 형식에 맞춰 재입력하기를 유도하기 (alert what are the problems of user's car names input to user)

- 경주 진행과정 전체를 보여주기 (show race process records)
- 최종 우승자 보여주기 (show winners)

<br/><br/>

## 게임방법 예시

<br/><br/>

![게임방법](images/result.gif)
