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
