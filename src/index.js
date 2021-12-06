import RacingCarController from './controller/RacingCarController.js';
import RacingCarModel from './model/RacingCarModel.js';
import RacingCarView from './view/RacingCarView.js';

class App {
  constructor() {
    const model = new RacingCarModel();
    const view = new RacingCarView();
    const controller = new RacingCarController(model, view);

    this.RacingCarController = controller;
    // 의존성 주입 시 -> 순환 하면 안된다!
    // 한쪽에서만 쓰도록 구조를 설계

    // 모델과 뷰는 상호작용하면 안 된다.
    // model, view -> controller
    this.RacingCarController.triggerEvent();
  }
}

// 클래스 안에서 클래스를 생성하지 안 된다.
// 클래스는 밖에서 생성되고, 안으로 넣어준다.
// 무조건 이 클래스 안에서 쓰는 애들은 상관없는데,
// 다양한 클래스에서 상호작용하는 애들은 밖에서 선언해준다.

const app = new App();

// view -> controller
// controller -> model
//

// 이벤트는 뷰가 받아서, 컨트롤러에 함수를 호출해서, 모델을 작업하고.
// 모델이 변경되면 뷰에 반영이 되게 한다.
