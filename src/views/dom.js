class DOMElement {
  $element;

  constructor($element) {
    this.$element = $element;
  }

  static createByTagName(tagName) {
    const $element = document.createElement(tagName);
    return new DOMElement($element);
  }

  static createBySelectors(selectors) {
    const $element = document.querySelector(selectors);
    return new DOMElement($element);
  }

  getValue() {
    return this.$element.value;
  }

  setText(text) {
    this.$element.innerHTML = text;
  }

  hide() {
    this.$element.style.display = 'none';
  }

  show() {
    this.$element.style.display = 'block';
  }

  addOnClick(onClick, preventDefault = false) {
    this.$element.addEventListener('click', (e) => {
      if (preventDefault) {
        e.preventDefault();
      }
      onClick(e);
    });
  }

  appendChild(domElement) {
    this.$element.appendChild(domElement.$element);
  }
}

export default DOMElement;
