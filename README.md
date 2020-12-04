# 🏎️ 자동차 경주 게임

## 📝 구현 기능 목록
1. **[✔️] 자동차의 입력을 받는 태그들과 레이싱 횟수를 입력하는 태그들에 id값을 부여하는 기능**
   - 자동차의 이름을 입력하는 input 태그 : #car-names-input
   - 자동차의 이름을 제출하는 button 태그 : #car-names-submit
   - 레이싱 횟수를 입력하는 input 태그 : #racing-count-input
   - 레이싱 횟수을 제출하는 button 태그 : #racing-count-submit
1. **[✔️] 자동차 입력을 받기 전까지 경주 횟수 입력받는 화면과 결과화면을 숨기는 기능**
   - 자동차 입력을 받은 후 화면에 보이게 함
1. **[✔️] 사용자에게 n대의 자동차 입력을 받는 기능**
   - 이름은 쉼표로 구분
1. **[✔️] 사용자의 자동차 입력이 올바른지 검사하는 기능**
   - 이름은 5자 이하만 가능
1. **[✔️] 사용자의 자동차 입력이 올바르지 않을 때 알려주고 다시 입력받는 기능**
   - ```alert```를 이용해 메세지 출력
1. **[✔️] 자동차 이름을 올바르게 입력했을 때 해당 자동차들을 생성하는 기능**
   - 구현 요구사항에 있는 템플릿을 사용
1. **[✔️] 사용자가 자동차를 올바르게 입력했을 때 경주 횟수 입력 창을 보여주는 기능**
   - 기존 display: none 속성을 지워서 화면에 보여줌
1. **[✔️] 사용자에게 경주 횟수를 입력 받고 올바르지 않을 때 알려주는 기능**
   - 0 이상의 숫자만 가능
   - 공백(빈 문자열)도 불가능
   - ```alert```를 통해 알려줌
1. **[✔️] 자동차와 경주 횟수 입력이 모두 올바를 때 게임을 실행하는 기능**
1. **[] 매 경주마다 결과를 자동차에게 저장하는 기능**
    - 값이 4이상 : 전진
    - 값이 3이하 : 멈춤
1. **[] 매 경주마다 결과를 화면에 보여주는 기능**
    - HTML을 삽입해서 결과를 보여줌
1. **[] 최종 결과를 보여주는 기능**
    - 우승자가 여러명일 때는 쉼표로 구분해서 출력 
      - ex) east, north
