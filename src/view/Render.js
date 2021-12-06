export default class Render {
  template = ($childTag, $parentTag, template) => {
    $childTag.innerHTML = template;
    $parentTag.appendChild($childTag);
  };

  hidden = ($title) => {
    $title.style.visibility = 'hidden';
  };

  // visible = ($title) => {
  //   $title.style.visibility = 'visible';
  // };
}
