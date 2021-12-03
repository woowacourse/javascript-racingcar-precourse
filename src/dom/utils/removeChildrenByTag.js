function removeChildrenByTagName(parent, tagName) {
  Array(...parent.getElementsByTagName(tagName)).forEach((child) =>
    parent.removeChild(child)
  );
}

export default removeChildrenByTagName;
