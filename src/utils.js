export function getRandNumberRangeOf(start, end) {
  start = Math.floor(start);
  end = Math.ceil(end);
  const result = Math.floor(Math.random() * (start - end)) + end;
  return result;
}
