export default class Render {
  template = ($child, $parent, template) => {
    $child.innerHTML = template;
    $parent.appendChild($child);
  };
}
