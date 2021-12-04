<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>
<h2 align="middle">기능 목록</h2>

이 문서는 🚗`자동차 경주 게임`🚗이 구현할 기능을 정리합니다.



## 자동차 경주 게임의 진행 순서

![실행이미지](../images/result.gif)

자동차 경주 게임의 진행 순서는 다음과 같다.

1. 사용자는 자동차 이름을 `n`개 입력한다.
2. 자동차 `n`개는 각각 사용자가 입력한 이름을 부여받는다.
3. 사용자는 자동차들이 이동 가능한 횟수 `m`을 입력한다.
4. 각각의 자동차는 `m`번 이동을 시도할 수 있다. 주어진 무작위 값이 4 이상인 경우라면 한 칸 전진한다.
5. 가장 많이 전진한 자동차(들)은 최종 우승자가 된다. 
6. 최종 우승자인 자동차를 출력한다.



# 자동차 경주 게임기 만들기 전 준비하기

## ⚙ 개발 환경 설정하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/eb8c6ee4d024635e2d4c1fad930ac7c3a63908c9)

- [x] linter: `eslint` with airbnb convetion
- [x] code formatter: `prettier`



# 자동차 경주 게임기 만들기

## 🔨 자동차 만들기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/b1f7b97a84d21ec198d4daee21b0d88f2d9c164e)

- [x] 자동차는 이름을 가진다.
- [x] 자동차는 전진한 칸 수를 가진다.
  - [x] 초기값은 `0`이다.
- [x] 자동차는 한 칸 전진할 수 있다.



## 🗑 초기화하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/11ea035d3c6bf48facdb3680539642c3826abe96)

- [x] [자동차 경주 게임의 진행 순서](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%90%EB%8F%99%EC%B0%A8-%EA%B2%BD%EC%A3%BC-%EA%B2%8C%EC%9E%84%EC%9D%98-%EC%A7%84%ED%96%89-%EC%88%9C%EC%84%9C)의 이미지를 참고하여, `index.html`의 html 태그들을 지우고 필요한 태그를 만든다.



## 🎨 Form 태그 만들기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/ff750d2a4eefc9d6e2061181be969b14ddccdf5a)

- [x] 자[동차 이름 form 태그 만들기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%90%EB%8F%99%EC%B0%A8-%EC%9D%B4%EB%A6%84-form-%ED%83%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0): 사용자가 `자동차 이름`을 입력하고 제출할 수 있도록 form 태그를 만든다.
- [x] [레이싱 횟수 form 태그 만들기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EB%A0%88%EC%9D%B4%EC%8B%B1-%ED%9A%9F%EC%88%98-form-%ED%83%9C%EA%B7%B8-%EB%A7%8C%EB%93%A4%EA%B8%B0): 사용자가 `레이싱 횟수`를 입력하고 제출할 수 있도록 form 태그를 만든다.



### 자동차 이름 form 태그 만들기

다음 조건을 만족하는 input 태그와 button 태그를 가진다.

- [x] 자동차의 이름을 입력하는 input 태그는 `car-names-input` id값을 가진다.
- [x] 자동차의 이름을 제출하는 button 태그는 `car-names-submit` id값을 가진다.



### 레이싱 횟수 form 태그 만들기

다음 조건을 만족하는 input 태그와 button 태그를 가진다.

- [x] 레이싱 횟수를 입력하는 input 태그는 `racing-count-input` id값을 가진다.
- [x] 레이싱 횟수을 제출하는 button 태그는 `racing-count-submit` id값을 가진다.



## 🚗 자동차 이름 입력 받기

~~[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/c32031831f1f80ba88e81a7f694b7475a2721f0c)~~

- [x] 사용자는 `car-names-input` input 태그에 자동차 이름을 `n`개 입력할 수 있다.
- [x] 사용자는 `car-names-submit` button 태그로 입력한 자동차 이름 `n`개를 제출할 수 있다.
- [ ] 게임기는 입력 값이 제출되면 다음을 수행한다.
  - [x] [입력 값 파싱하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%85%EB%A0%A5-%EA%B0%92-%ED%8C%8C%EC%8B%B1%ED%95%98%EA%B8%B0): 입력 값에서 `자동차 이름`을 `n`개 얻는다.
  - [ ] [입력 값 검사하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%85%EB%A0%A5-%EA%B0%92-%EA%B2%80%EC%82%AC%ED%95%98%EA%B8%B0): 각각의 `자동차 이름`이 유효한지 검사한다.
  - [x] [입력 값 처리하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%85%EB%A0%A5-%EA%B0%92-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0): 입력 값 검사하기 결과에 따라 입력 값을 처리하고 게임을 진행한다.




### 입력 값 파싱하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/7fb20fbd1d5492fd313b20ce1dd639950993459f)

사용자의 입력 값은 `n`개의 `자동차 이름`이 `,`(쉼표)로 구분되어 있다.

- [x] 사용자의 입력 값을 `,`를 기준으로 파싱하여 `자동차 이름` 목록을 얻는다.



### 입력 값 검사하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/e479004b3aa95346f17e4a2a5b1db285e7045e94)

각각의 `자동차 이름`은 다음 조건을 만족해야 한다.

- [x] 화면에 표시하기 위하여 각각의 `자동차 이름`은 `1`자 이상  `5`자 이하여야 한다.
- [x] 우승자를 구분하기 위하여 각각의 `자동차 이름`은 고유해야 한다.
- [ ] `자동차 이름`은 공백 문자로만 이루어져서는 안된다.



### 입력 값 처리하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/003d8f8c2ca2230e80495465673d320ddd929282)

각각의 `자동차 이름`이 조건을 만족한다면, 다음을 수행한다.

- [x] `자동차`를 `n`개 만들고, 각각 `자동차 이름`을 부여한다.
- [x] 사용자가 `레이싱 횟수`를 입력하고 제출할 수 있도록 form 요소들을 만든다.



`자동차 이름`이 조건을 만족하지 않는다면, 다음을 수행한다.

- [x] `alert`로 메시지를 출력한다.
- [x] 사용자가 다시 입력할 수 있도록 `car-names-input` input 태그의 내용을 초기화한다.



## :pencil2: 레이싱 횟수 입력 받기

~~[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/707d7f4708ff8a4f53fd7f5c3b68c7be28b7c772)~~

- [x] 사용자는 `racing-count-input` input 태그에 `레이싱 횟수`를 입력할 수 있다.
- [x] 사용자는 `racing-count-submit` button 태그로 `레이싱 횟수`를 제출할 수 있다.
- [x] 게임기는 `레이싱 횟수`가 제출되면 다음을 수행한다.
  - [x] [입력 값 검사하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%85%EB%A0%A5-%EA%B0%92-%EA%B2%80%EC%82%AC%ED%95%98%EA%B8%B0-1): 입력 값이 유효한지 검사한다.
  - [x] [입력 값 처리하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%9E%85%EB%A0%A5-%EA%B0%92-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-1): 입력 값 검사하기 결과에 따라 입력 값을 처리하고 게임을 진행한다.



### 입력 값 검사하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/858f97fe7a98b99623c2f8d1e4615b40858a9933)

`레이싱 횟수`는 다음 조건을 만족해야 한다.

- [x] 정수여야 한다.
- [x] 게임 진행을 위하여 `1` 이상이어야 한다.



### 입력 값 처리하기

`레이싱 횟수`가 조건을 만족한다면, 다음을 수행한다.

- [x] `레이싱 횟수`를 저장한다.
- [x] 경주를 진행한다.



`레이싱 횟수`가 조건을 만족하지 않는다면, 다음을 수행한다.

- [x] `alert`로 메시지를 출력한다.
- [x] 사용자가 다시 입력할 수 있도록 `racing-count-input` input 태그의 내용을 초기화한다.



## :checkered_flag: 경주 진행하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/a03edebc0583b1cbbf91998ed37eae00c13fd548)

경주는 다음과 같은 과정을 `레이싱 횟수`만큼 반복하여 진행된다.

1. [무작위 값 생성하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EB%AC%B4%EC%9E%91%EC%9C%84-%EA%B0%92-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0): 각각의 `자동차`마다 `무작위 값`을 생성한다.
2. [무작위 값 검사하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EB%AC%B4%EC%9E%91%EC%9C%84-%EA%B0%92-%EA%B2%80%EC%82%AC%ED%95%98%EA%B8%B0): 각각의 `자동차`에 생성된 `무작위 값`을 검사한다.
3. [무작위 값 처리하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EB%AC%B4%EC%9E%91%EC%9C%84-%EA%B0%92-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0): 자신의 `무작위 값`에 따라 `자동차`는 전진하거나 머무른다.
4. [경주 현황 표시하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EA%B2%BD%EC%A3%BC-%EC%A7%84%ED%96%89%ED%95%98%EA%B8%B0): 각각의 자동차의 위치를 표시한다.



### 무작위 값 생성하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/d1eaac64c6c9b1d223f3be7f5c766b1b233de05d)

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/f16aa28a7d877a3e333e3824bb93954c2431257f): 오류 수정

게임기는 각각의 `자동차`마다 `무작위 값`을 생성한다. `무작위 값`은 다음과 같은 형식이다.

- [x] `0`부터 `9` 사이의 수이다.



### 무작위 값 검사하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/daa4504f2e8fc7134a88f4be6cdb5fb9b7376eb7)

- [x] `무작위 값`이 `4` 이상인지 검사한다.



### 무작위 값 처리하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/b028e031a1ef1087808a2ead7c484b7929fc1ab6)

- [x] 자동차는 무작위 값에 따라 한 칸 전진하거나, 그대로 머무른다.
  - [x] 무작위 값이 `4` 이상이면 한 칸 전진한다.
  - [x] 무작위 값이 `4` 미만이라면 머무른다.



### 경주 현황 표시하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/baf7cedc66d031bbd1e2f5c2a1ddc4549365a9e6)

- [x] 현재 각각의 `자동차`의 위치를 해당 `자동차 이름`과 함께 표시한다.
  - [x] 예) `라나`라는 자동차가 현재까지 3번 전진했다면 `라나: ---`




## 🏆 경주 우승자 판단하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/e73f1b08094d57978e6fa6c92f483bfeb857eb97)

경주 우승자를 판단하는 과정은 다음과 같다.

- [ ] 각각의 `자동차`들의 최종 `전진 횟수`를 가져온다.
- [ ] `전진 횟수`가 가장 많은 `자동차`의 이름을 얻는다.
  - [ ] 공동 우승이 가능하다.



## :newspaper: 경주 우승자 표시하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/f5146e4c2678f3ad8daff5f3fb0d9feab3815685)

![실행이미지](../images/result.jpg)

- [ ] [최종 우승자 표시하기](https://github.com/leegwae/javascript-racingcar-precourse/tree/leegwae/docs#%EC%B5%9C%EC%A2%85-%EC%9A%B0%EC%8A%B9%EC%9E%90-%ED%91%9C%EC%8B%9C%ED%95%98%EA%B8%B0): 사용자는 `racing-winners` span 태그로 `최종 우승자`를 확인할 수 있다.



### 경주 우승자 표시하기

[완료 커밋](https://github.com/leegwae/javascript-racingcar-precourse/commit/25b841a9ddf4532237a426dd14fafbf3d236effb)

- [ ] 경주 우승자는 `경주 우승자: 자동차이름`으로 표시한다.
- [ ] 경주 우승자가 여러 대이면 `,`(쉼표)로 구분한다.

