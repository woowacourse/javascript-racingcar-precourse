export class CarName {
  constructor() {
    this.input = document.querySelector('#car-names-input');
    this.submit = document.querySelector('#car-names-submit');
  }
}

export class Count {
  constructor() {
    this.title = document.querySelector('#count-title');
    this.input = document.querySelector('#racing-count-input');
    this.submit = document.querySelector('#racing-count-submit');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.title.style.visibility = 'visible';
      this.input.style.visibility = 'visible';
      this.submit.style.visibility = 'visible';
      return true;
    }
    this.title.style.visibility = 'hidden';
    this.input.style.visibility = 'hidden';
    this.submit.style.visibility = 'hidden';
  }
}

export class Result {
  constructor() {
    this.title = document.querySelector('#result-title');
    this.div = document.querySelector('#result-div');
    this.setVisible(false);
  }

  setVisible(boo) {
    if (boo) {
      this.title.style.visibility = 'visible';
      this.div.style.visibility = 'visible';
      return true;
    }
    this.title.style.visibility = 'hidden';
    this.div.style.visibility = 'hidden';
  }
}
