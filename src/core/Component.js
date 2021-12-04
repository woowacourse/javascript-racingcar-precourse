import { isObjectEmpty } from '../utils/general.js';

export default class Component {
  constructor(props = {}) {
    this.container = null;
    this.state = {};
    this.props = props;
    this.propsKeys = Object.keys(props);
    this.childrens = [];
    this.init();
  }

  init() {
    this.initState();
    this.initDoms();
    this.bindEvents();
    this.initChildrens();
    this.render();
  }

  initState() {}

  initDoms() {}

  bindEvents() {}

  initChildrens() {}

  appendRootEvent(type, handler) {
    this.container.addEventListener(type, handler);
  }

  setState(nextState) {
    this.state = { ...this.state, ...nextState };
    this.updateComponent();
  }

  setProps(nextProps) {
    const newProps = {};
    this.propsKeys.forEach(key => {
      if (nextProps[key] && nextProps[key] !== this.props[key])
        newProps[key] = nextProps[key];
    });
    if (isObjectEmpty(newProps)) return;
    this.props = { ...this.props, ...newProps };
    this.render();
  }

  updateComponent() {
    this.childrens.forEach(child => {
      child.setProps(this.state);
    });
    this.render();
  }

  render() {}
}
