export default class InputValid {
  isRightCharacter(splitName) {
    // ","를 제외한 특수문자 사용 불가
    if (
      splitName.find((name) =>
        name.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/),
      )
    ) {
      return alert('특수문자는 사용 불가능합니다.');
    }

    return true;
  }

  isRightLength(splitName) {
    if (splitName.find((name) => name.length > 5)) {
      return alert('이름은 5자리 이하로 입력해주세요.');
    }
    if (splitName.find((name) => name === '')) {
      return alert('빈칸은 입력할 수 없습니다.');
    }

    return true;
  }

  isEqualValue(splitName) {
    if (splitName.length === new Set(splitName).size) {
      return true;
    }

    return alert('중복된 이름이 존재합니다.');
  }
}
