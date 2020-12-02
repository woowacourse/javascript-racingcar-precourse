export class NameValid {
  constructor(name) {
    this.nameInput = name;
  }

  isRightCharacter() {
    // ","를 제외한 특수문자 사용 불가
    if (
      this.nameInput.find((name) =>
        name.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-+<>@\#$%&\\\=\(\'\"]/),
      )
    ) {
      return alert('특수문자는 사용 불가능합니다.');
    }

    return true;
  }

  isRightLength() {
    if (this.nameInput.some((name) => name.length > 5)) {
      return alert('이름은 5자리 이하로 입력해주세요.');
    }
    if (this.nameInput.some((name) => name === '')) {
      return alert('빈칸은 입력할 수 없습니다.');
    }

    return true;
  }

  isAllDifferentValue() {
    if (this.nameInput.length !== new Set(this.nameInput).size) {
      return alert('중복된 이름이 존재합니다.');
    }

    return true;
  }
}

export class TimesValid {
  constructor(times) {
    this.times = times;
  }

  isMoreThanZero() {
    if (parseInt(this.times, 10) <= 0) {
      return alert('1이상의 숫자를 입력해주세요.');
    }

    return true;
  }

  isfilledValue() {
    if (this.times === '') {
      return alert('빈칸을 입력하셨습니다.');
    }

    return true;
  }

  isRightNumber() {
    if (this.times.match(/\D/)) {
      return alert('숫자를 입력해주세요.');
    }

    return true;
  }
}
