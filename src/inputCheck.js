export default function InputCheck() {
  this.textCheck = (inputStrings) => {
    const words = inputStrings.split(",");
    const maxLength = 5;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength || words[i].length === 0 || words[i].length === " ") {
        alert(
          `자동차 이름은 최소 1글자, 최대 ${maxLength}글자까지 허용됩니다.\n + 공백은 허용되지 않습니다.`
        );
        return false;
      }
      // 중복된 자동차 이름이 있는지 체크
      console.log([...words.slice(0, i), ...words.slice(i + 1)]);
      if ([...words.slice(0, i), ...words.slice(i + 1)].includes(words[i])) {
        alert(`중복된 이름이 있습니다. 다시 입력해주세요!\n + 중복이름: ${words[i]}`);
        return false;
      }
    }

    return words;
  };

  this.numCheck = (inputNum) => {
    const minNum = 0;
    if (inputNum <= minNum) {
      alert(`${minNum + 1} 이상의 수를 입력하세요!`);
      return false;
    }

    return true;
  };
}
