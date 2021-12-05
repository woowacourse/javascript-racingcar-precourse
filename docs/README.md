## PROCESS

게임 시작 전

-   횟수 입력 / 자동차 이름 입력 (해당 2가지 조건이 만족 되었을 때 게임 진행 가능)
    -   2가지 조건 중 하나라도 입력이 성립되지 않으면, alert 띄우기

게임 진행

-   입력된 횟수만큼 게임 진행, 자동차 이름 만큼 전진 할지 안할지 총 횟수가 결정됨. 횟수 x 자동차 이름 개수 만큼 Random숫자 생성
-   0~9 중에서 4이상인 경우에만 자동차 경주가 추가됨. (자동차의 경우 object로 생성해서 이름 / 입력칸 형식으로 입력 받을 것)
-   view.js파일을 통해서 게임 진행이 어떻게 이루어 지고 있는지 html파일에 추가.
-   <p>`${car.name}: ${'-'.repeat(car.distance)}`</p> + 마지막에 <br> 추가

게임 종료

-   저장된 자동차 이동 거리 비교 후, 가장 값이 큰 자동차 이름을 반환.

## 기능별 목록 정리

    -   횟수 입력 및 조건 확인 함수 생성 --> input.js
        횟수 checklist

        *   숫자인지 isNaN
        *   0 이 아닌지 === 0
        *   길이가 1이상인지 (공백 확인)

        자동차 이름 checklist (해당 값들은, string.split(',')으로 반환해서 array 형식으로 진행될 예정)

        *   글자 범위 (1 ~ 5)
        *   공백 확인

    -   자동차 이름 입력 및 조건 확인 함수 생성 -->car.js
        function Car(name){
            this.name = name;
            this.distance = 0
            setter()
            getter()
        }

    -   게임 진행 조건(0~9 사이의 랜덤 숫자 생성 및 4이상일 경우 전진)에 맞춰 진행 함수 생성 --> game.js

    -   진행 완료 후 가장 멀리 간 자동차 출력 --> result.js
        <span id = "racing-winners"></span> 형식에 출력.

파일 구조
├── src
│ ├── input.js  
│ ├── constant.js  
│ ├── car.js
│ ├── game.js
│ ├── result.js
│ ├── view.js
│ └── index.js
└── index.html
