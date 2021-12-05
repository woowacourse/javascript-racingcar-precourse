export default class Render {
  template = ($childTag, $parentTag, template) => {
    $childTag.innerHTML = template;
    $parentTag.appendChild($childTag);
  };
}
