class VisibleElement {
  constructor(elementIdArray) {
    this.elementIds = elementIdArray;
  }

  show() {
    this.elementIds.forEach(elementId => {
      const $element = document.getElementById(elementId);

      $element.style.display = "";
    });
  }

  hide() {
    this.elementIds.forEach(elementId => {
      const $element = document.getElementById(elementId);

      $element.style.display = "none";
    });
  }
}

export default VisibleElement;
