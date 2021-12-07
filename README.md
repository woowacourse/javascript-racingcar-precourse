<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## ✔️ 기능 설계 (ire4564)

이번 2주차 미션은 자동차 경주 게임을 아래의 요구사항에 맞춰 만드는 미션이다. 이번에는 저번 야구게임 미션과는 달리 함수형이 아닌 클래스형을 사용하여 미션을 진행할 예정이다.  코딩컨벤션은 저번 미션과 마찬가지로 <NHN FE 개발랩>의 코딩컨벤션을 선택하여 따랐다. (ESLint 사용 예정) 또한 moudle 사용 건 때문에 별도로 https server를 설치하였다. 실행 시에는 `npm start` 를 하여 실행하면 된다. <br/>

<br/>

필요한 기능은 아래와 같다. <br/>

최대한 함수를 자잘하게 나누려고 노력하였으며, 함수 단위로 기능을 작성한 결과 아래와 같은 기능이 나왔다. 기능은 각각 커밋 시에 알아보기 쉽도록 각각의 번호를 붙였다.<br/>



<br/>

<b>index.js</b>

- [ ] String Result 생성 (002) - `createResult`

- [ ] Set Result in DOM (003) -`setResult`

<b>compare.js</b>

- [x] Strike 개수 세기 (004) - `countStrike`

- [ ] Ball 개수 세기 (005) - `countBall`

- [ ] 낫싱인지 판단 (006) - `isNothing`

- [ ] 모두 정답인지 판단 (007) - `isCorrectAll`

<b>restart.js</b>

- [x] Button을 보이기 (008) - `setButton`

- [x] Button을 숨기기 (009) - `clearButton`

- [x] Random 값 생성 (001) - `createAnswer`

<b>validation.js</b>

- [x] input을 모든 조건에 맞도록 check - `checkInput` 

- [x] input 값이 비어있지 않은지 (011) - `isNotnull`

- [x] 3자리 수가 맞는지 (012) - `isThreeNum`

- [x] 서로 다른 수인지 (013) - `isAnother`

- [x] 숫자인지 검사 (014) - `isNumber`

- [x] 0이 포함되었는지 범위 검사 (015) - `isZero`



---
## 🎯 기능 요구사항 (Basic)
초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 입력 값을 작성한 경우 `alert`을 이용해 메시지를 보여주고, 다시 입력할 수 있게 한다.

<br>

### 💻 실행 결과

![실행이미지](images/result.jpg)

<br>

