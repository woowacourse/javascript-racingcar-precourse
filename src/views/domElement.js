class DOMElement {
  $element;

  constructor($element) {
    this.$element = $element;
  }

  static createByTagName(tagName) {
    const $element = document.createElement(tagName);
    return new DOMElement($element);
  }

  static createById(id) {
    const $element = document.getElementById(id);
    return new DOMElement($element);
  }

  setId(id) {
    this.$element.id = id;
  }

  setText(text) {
    this.$element.innerHTML = text;
  }

  getValue() {
    return this.$element.value;
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
