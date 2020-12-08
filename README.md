# 🏎️ 자동차 경주 게임

## 전체 작동 과정
- RacingCarGameView에서 RacingCarGameViewModel를 구독합니다.
- RacingCarGameViewModel에선 RacingCarGameView를 구독자로 등록합니다.
- 이후 경주에 참여한 자동차 이름들을 입력받습니다.
  - 자동차 이름들은 쉼표(,)로 구분됩니다.
  - 다음과 같은 예외에 해당하는 경우, alert()으로 에러 메시지를 띄우고 재입력을 받도록 합니다.
    - 자동차 이름이 5글자를 초과한 경우.
    - 자동차 이름이 입력되지 않은 경우. (ex. 아예 빈칸 혹은 name1,,,,name5와 ,,,와 같은 경우)
    - 자동차 이름이 공백으로 이루어진 경우 (ex. '', ' ', '  ' .... 등 공백이 N회 반복되는 경우)
    - 자동차 이름에 중복이 존재하는 경우.

- 경주의 진행 횟수 (차들이 이동할 횟수)를 입력받습니다.
  - 다음과 같은 예외에 해당하는 경우, alert()으로 에러 메시지를 띄우고 재입력을 받도록 합니다.
    - 숫자가 아닌 값이 입력된 경우.
    - 1미만의 숫자가 입력된 경우.
    
- 입력된 값들을 RacingCarGameViewModel로 전송하고 Proxy trap으로 입력을 잡아 처리합니다.
  - 자동차 이름의 경우, RacingCarGameModel에서 Car 인스턴스들을 만듭니다.
  - 경주의 진행 횟수인 경우, 횟수를 저장한 후 이를 삭감하는 방식으로 반복문을 돌리며 RacingCarGameModel에서 게임을 진행시킵니다.
    - RacingCarGameModel에선 게임이 진행될 때마다 0과 9사이의 난수를 뽑고, 난수가 4 이상일 경우 Car 인스턴스들을 전진시킵니다.
    - RacingCarGameViewModel에서 RacingCarGameModel의 getter를 활용해 상태변화를 감지하고 RacingCarGameView에 이 사실을 알립니다.
- RacingCarGameView에선 변경사항이 알려질 때마다 중간 결과를 렌더링합니다.
- 경주가 종료되면 가장 멀리 이동한 자동차의 거리를 확인합니다.
- 해당 거리만큼 이동한 자동차들을 모두 우승자로 간주합니다. (우승자는 복수일 수 있음)
- 우승자들을 최종 결과로서 렌더링합니다.
  
  

## 기능 목록

- RacingCarGameView class 
  - init
  - handleCarNamesSubmit
  - handleRacingCountSubmit
  - addEventListenerToRacingCountSubmitButton
  - addEventListenerToCarNamesSubmitButtton
  - submitRacingCount
  - submitCarNames
  - subscribeViewModel
  - updateChange
  - validNames
  - validCount
  - decideWinners
  - sortedByDistance
  - resetCarNamesInput
  - resetRacingCountInput
  - renderRacingCountInputAndSubmitButton
  - renderResultHeading
  - renderIntermediateResult
  - renderWinners
  - renderResult
  
- RacingCarGameViewModel class
  - setProxy
  - registerViews
  - setRacingCountAndGameProgress
  - notifyChange
  
- RacingCarGameModel class
  - setCarInstances
  - getCarInstances
  - letCarsMoveForward

- Car class
  - moveForward

- utils
  - isLongerThan
  - isNames
  - randomNumber

  
  
