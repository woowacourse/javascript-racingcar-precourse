# 프로젝트 소개

우아한 테크 프리코스의 두 번째 과제인 racingcar game 프로젝트이다. 이 프로젝트는 한 명의 프론트엔드 개발자로 진행되었으며, 구현 환경은 ES6+ 이다. Chrome Browser(버전 96.0.4664.55)에서 테스트, 구현되었으며, 만들어질 프로덕트는 다음과 같은 게임이다.

자동차들을 입력을 통해 만들어, 자동차들을 입력하는 횟수만큼 시뮬레이션 시킬 수 있다. 이 때 시뮬레이션은 '자동차의 전진', '자동차의 정지'이며, 한 번의 시뮬레이션에서 하나의 자동차는 '자동차의 전진' 또는 '자동차의 정지' 상태가 된다. 이러한 시뮬레이션이 횟수만큼 실행되면, 게임의 결과로 각 시뮬레이션 과정을 확인할 수 있고 레이싱 게임의 우승자 또한 확인할 수 있다.

coding convention은 [NHN FE 개발랩](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION) 을 따랐다.

이번 프로젝트의 목표가 클래스의 분리인 만큼 다음과 같이 4개의 클래스로 구성하였다.

- Car : 자동차 정보를 담는 클래스이다.
- CarGame : CarGame의 뷰를 담당한다.
- CarGameController : CarGame의 뷰와 cars 멤버 (데이터)를 수정하는 클래스.
- CarGameUtil : CarGame에서 사용되는 유틸 함수들을 static 함수로 만들어 다른 클래스로 분리하였다.

# 폴더 구조

```
├── src
│   ├── app
│   │   │── index.js 📘 CarGame 클래스가 정의되어 있다.
│   │   │── car.js 📘 Car 클래스가 정의되어 있다.
│   │   │── controller.js 📘 Car와 CarGame의 뷰를 수정하는 CarGameController 클래스가 정의되어 있다.
│   │   └── util.js 📘 CarGame에서 사용되는 유틸함수들이 포함되어 있다.
│   └── lib
│        │── constants.js
│        └── utils.js
│── docs
│    └── README.md

```

# 기능 구현사항

## 1. 입력을 통해 자동차 객체들을 생성할 수 있다.

    ✅ 자동차 이름은 5자 이하이다.
    ✅ 자동차가 입력되기 전에 횟수를 입력하면 alert를 출력한다.
    ✅ 자동차 이름에 공백은 포함되지 않는다.
    ✅ 자동차 이름은 중복되지 않는다.

## 2. '시도할 횟수'를 입력하여 자동차 게임을 실행할 수 있다.

    ✅ 'form_count' 의 input에 숫자 이외의 문자가 입력되면 error다.(type 속성에 의해 browser가 제어해준다?)
    ✅ 'form_count' 의 input에 음수 혹은 0이 입력되면 error다.

## 3. 입력된 횟수만큼 시뮬레이션 한다.

    ✅ 횟수별로 자동차들을 모두 순회하면서, 각 순회마다 랜덤한 숫자값이 4이상인지를 체크하여 자동차를 '전진' 시킨다.
    ✅ 4 이하라면 '정지'이다.

## 4. 시뮬레이션이 종료되면 실행 결과 창에 결과를 렌더링한다.

    ✅ 시뮬레이션 1회 당 결과 템플릿 1개이다. (시뮬레이션이 5번 실행되면 렌더링 되는 결과 템플릿은 5개이다.)
    ✅ 시뮬레이션 과정에서 자동차들을 순회하며, 전진할지 정지할지 정하게 되는데 전진 시 '-'가 하나 증가하고 정지 시 이전 상태 그대로이다.

## 5. 결과 창에는 최종 우승자가 포함되어 렌더링 되며, 이는 다수일 수 있다.

    ✅ `,`로 분리되어 출력된다.

## 6. 카운트 입력 창은 자동차들이 입력된 이후에 노출된다. 또 결과창은 카운트 입력 후 템플릿을 계산한 후에 노출된다.

    ✅ 자동차 이전에 카운트가 입력되는 경우는 존재하지 않게된다.

## 7. 리팩토링

    ✅ 결과 텍스트는 span#racing-winners로 감싸진다

    ✅ `,` 문자를 SEPERATOR 상수로 변경한다.

    ✅ initHandler() 함수의 라인수가 너무 길다. 함수의분리. 핸들러 내부에서 중복되는 부분을 다른 함수로 분리하였다.

    ✅ 돔에 접근하는 코드를 querySelector -> getElementById 로 변경한다. 이유 : DOM 상수의 프로퍼티 값들을 통일 시킬 수 있고, 성능이 더 좋다.

    ✅ 유지보수를 위해서라도 뒤늦은 상수화를 진행 (유틸 함수에서 사용되는 값들에 대한 상수화를 진행한다)

    ✅ 객체 상수의 경우 값이 변경될 수도 있으므로, Object.freeze를 통해 불변 객체로 만든다.

    ✅ prettier가 NHN FE 컨벤션에 맞게 설정되어 있지 않았다. printWidth가 80이었을땐 lint error가 출력되었는데, NHN 처럼 100으로 변경하니   발생하지 않음. prettier 수정

    ✅ makeResultTemplate가 15라인이 넘어가서 lint 에러가 발생

       generateResultTemplate - generateAllSimulateTemplate - generateEachSimulateTemplate - generateWinnerTemplate로    분리

    ✅ error 메세지는 상세하게 준다.

    ✅ CarGameLogic -> CarGameController 로 변경한다. (Car 객체들을 담는 멤버와 CarGameModel을 변경한다.)

    ✅ 변수명, 메소드명을 명확한 의미를 갖도록 변경

# TIL - 느낀점

지원 플랫폼에 작성한 것 외에 느낀점을 간단하게 정리해보았습니다.

- 클래스를 역할에 따라 분리해보았습니다. 그 과정에서 클래스 간 의존성이 있다고 생각하게 되었고 MVC 패턴을 떠올리게 되었습니다.

- undefined vs null : 비어있음을 표현하고 싶을 때 undefined 보다 null이 더 의미가 맞다고 판단하였습니다. undefined는 말그대로 정의되지 않았음을 의미한다고 생각하기에 빈 값을 의미할 때 null을 할당하였습니다.

- 객체 상수의 불변성을 유지하고자 하였습니다. 자바스크립트의 객체의 프로퍼티 값은 변경가능합니다. 따라서 객체 상수의 값이 변경될 수 있는데, 이를 막기 위해 Object.freeze를 활용하였습니다.
- eslint와 prettier를 함께 사용할 때, 충돌이 발생할 수 있는데 이를 막을 수 있는 플러그인이 존재합니다. (eslint-config-prettier는 충돌되는 옵션을 비활성화합니다.)
- eslint를 프로젝트에 적용할 때 여러 이슈가 발생하여 이를 해결하였습니다.

  - 1. eslint로 출력되는 것들이 ide에서 보이지 않는다면, vscode 하단 eslint 버튼을 클릭하여 콘솔을 통해 에러를 확인할 수 있습니다. (확장을 설치한경우)
  - 2. eslint의 version이 너무 높아 처음에 lint가 수행되지 않았습니다.[REF](https://stackoverflow.com/questions/69873231/eslint-sourced-from-same-location-cant-load-library-in-different-projects
       https://sunmon.github.io/vscode-eslint-prettier-setting/)
  - 3. eslint와 prettier의 역할을 이해하였습니다.

- 프로젝트의 목표를 지향하자 : 1주차 과제에서 함수의 분리라는 목표보다 가독성에 신경 쓴 나머지 프로그래밍 요구사항을 지키지 못하는 문제가 발생하였습니다. 이번 프로젝트의 목표는 클래스의 분리였고, 다른 것보다 이것에 신경쓰며 개발을 진행하였습니다.
