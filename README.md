<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 🔍 진행방식

- 미션은 **기능 요구사항, 프로그래밍 요구사항, 과제 진행 요구사항** 세 가지로 구성되어 있다.
- 세 개의 요구사항을 만족하기 위해 노력한다. 특히 기능을 구현하기 전에 기능 목록을 만들고, 기능 단위로 커밋 하는 방식으로 진행한다.

---
## 커밋 메세지
1. 메세지 구조
  type: subject -- 헤더 
  -- 빈 줄 
  -- 본문 
  -- 빈 줄 
  -- 바닥 글

2. 메세지 규칙
  * 제목과 본문을 행으로 구분
  * 제목은 50자 이내로 작성
  * 제목의 첫 글자는 대문자
  * 제목의 끝에는 마침표를 사용하지 않음
  * 본문의 각 행은 72자 이내
  * '어떻게'보다 '무엇', '왜'를 설명

3. Type
  * feat : 새로운 기능에 대한 커밋
  * refactor : 리팩토링에 대한 커밋
  * test : 테스트 코드 수정에 대한 커밋
  * docs : 문서 수정에 대한 커밋
  * style : 코드 포맷, (;) 누락 등에 대한 커밋
  * update : 기존 코드 및 파일 업데이트에 대한 커밋
<br>

## 구현할 기능 목록
1. Car 객체 생성 <br>
  1.1 난수 생성하기 <br>
  1.2 난수가 4이상인 경우 자동차 전진 <br>
  1.3 자동차 이름, 현재 위치 확인 <br>

2. 자동차 이름 입력 받기 <br>
  2.1 입력 받은 값을 (,)로 구분 <br>
  2.2 분리된 이름의 길이 확인 <br>
    -> 5자리 이하인 경우 다시 입력받기 <br>
  2.3 중복된 이름 값 확인 <br>
    -> 중복된 이름이 있는 경우 다시 입력 받기 <br>
  2.4 올바른 이름의 입력값을 받기 전까지 시도 횟수를 입력 받지 못함

3. 시도 횟수 입력 받기 <br>
  3.2 입력 받은 시도 횟수가 숫자인지 확인 <br>
    -> 숫자가 아닌 경우 다시 입력 받기 <br>
  
4. 입력 받은 자동차 이름과 시도 횟수를 통해 게임 시작 <br>
  4.1 시도 횟수 만큼 게임을 진행 <br>
  4.2 각 회 마다, 각 자동차에게 난수를 생성 <br>
  4.3 난수 값이 4이상인 경우 자동차 전진 <br>
  4.4 모든 횟수를 진행한 경우 최종 결과 생성 <br>

5. 최종 결과 확인 <br>
  5.1 가장 많이 전진한 자동차 이름을 출력 <br>
  5.2 우승자한 자동차가 여러대면 (,)로 구분해서 출력 <br>
