class Component {
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.$state = {};
    this.template();
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}

  template() {}

  render() {
    this.mounted();
  }

  setEvent() {}

  setState(newState) {
    this.$state = Object.assign(this.$state, newState);
    this.render();
  }

  addEvent(eventType, selector, handler) {
    const eventTarget = this.$target.querySelector(selector);

    eventTarget.addEventListener(eventType, handler);
  }
}

export default Component;
