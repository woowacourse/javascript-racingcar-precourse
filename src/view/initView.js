import View from './View.js';

export default function initView() {
  const view = new View();

  view.hideNextHtml();
  return view;
}
