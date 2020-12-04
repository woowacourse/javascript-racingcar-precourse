export default function InputCheck() {
  this.textCheck = (inputStrings) => {
    const words = inputStrings.split(",");
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > 5) {
        alert(`${words[i]}의 길이가 5를 초과합니다!`);
        return false;
      } else {
        return words;
      }
    }
  };
}
