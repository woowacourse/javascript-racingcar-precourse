<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">nannoo's 자동차 경주 게임</h1>

## 구현 기능 목록

- [x] 자동차 이름 입력 받기: 5자 이하, 쉼표 기준 분리
- [x] 총 이동 횟수 입력 받기
- [x] 이름: 옳은 입력인 지 확인
- [x] 이동 횟수: 옳은 입력인지 확인
- [x] 잘못된 값 입력 시 alert 및 다시 입력
- [x] 모두 제대로 된 입력값일 때 게임 시작
- [x] 자동차마다 0 ~ 9 랜덤값 생성
- [x] 랜덤값 체크: 4 이상인지
- [x] 이동할 때마다 결과 출력
- [x] 총 이동 완료 후 우승자 확인
- [x] 우승자 출력: 여럿일 경우 쉼표로 구분

---

## 🎯 게임 방법

초간단 자동차 경주 게임

- 주어진 횟수 동안 n 대의 자동차는 전진 또는 멈출 수 있다.
- 자동차에 이름을 부여한다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.

---

## 💻 실행 화면

![실행이미지](images/result.jpg)

---

## 라이브러리

- 전진하는 조건을 판단하기 위한 랜덤 값은 [`MissionUtils` 라이브러리](https://github.com/woowacourse-projects/javascript-mission-utils#mission-utils)의 `Random.pickNumberInRange`를 사용해 구한다.
  - `MissionUtils` 라이브러리 스크립트는 `index.html`에 이미 포함되어 전역 객체에 추가되어 있으므로, 따로 `import` 하지 않아도 구현 코드 어디에서든 사용할 수 있다.

---

## ✔️ 테스트 실행 가이드

- 테스트 실행에 필요한 패키지 설치를 위해 `Node.js` 버전 `14` 이상이 필요하다.
- 다음 명령어를 입력해 패키지를 설치한다.

```bash
  // {폴더 경로}/javascript-racingcar-precourse/ 에서
  npm install
```

- 설치가 완료되었다면, 다음 명령어를 입력해 테스트를 실행한다.

```bash
  // {폴더 경로}/javascript-racingcar-precourse/ 에서
  npm run test
```

- 아래와 같은 화면이 나오며 모든 테스트가 pass한다면 성공!

![테스트 결과](./images/test_result.png)
