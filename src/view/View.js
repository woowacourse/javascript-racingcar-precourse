function hideNextHtml($countHead, $countForm, $result) {
  $countHead.style.display = 'none';
  $countForm.style.display = 'none';
  $result.style.display = 'none';
}

export default class View {
  constructor() {
    this.$countHead = document.querySelector('#racing-count-head');
    this.$countForm = document.querySelector('#racing-count-form');
    this.$result = document.querySelector('#result');
    hideNextHtml(this.$countHead, this.$countForm, this.$result);
  }
}