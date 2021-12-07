export default class Render {
  template = ($child, $parent, template) => {
    $child.innerHTML = template;
    $parent.appendChild($child);
  };

  hidden = $target => {
    $target.style.visibility = 'hidden';
  };

  visible = $target => {
    $target.style.visibility = 'visible';
  };
}
