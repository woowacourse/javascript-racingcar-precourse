class HeadingManager {
  constructor(id) {
    this.heading = document.getElementById(id);
  }

  setVisibility(visible) {
    this.heading.style.visibility = visible ? 'visible' : 'hidden';
  }
}

export default HeadingManager;
