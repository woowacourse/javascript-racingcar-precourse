// querySelector wrapper
export default function $(selector, scope) {
  return (scope || document).querySelector(selector);
}
