export default function splitWithoutMargin(value, splitWord) {
  const result = value.split(splitWord);
  result.forEach((item, index) => {
    result[index] = item.trim();
  });

  return result;
}
