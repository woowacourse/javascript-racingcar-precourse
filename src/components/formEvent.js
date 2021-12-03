export function formEvent() {
  const allForm = document.getElementsByTagName("form");
  for (const eachForm of allForm) {
    eachForm.addEventListener("submit", (e) => {

      const inputCheckResult = inputCheck();
      e.preventDefault();
    })
  }
}

function inputCheck() {
  const allInput = document.getElementsByTagName("input");
  const userInputArray = [];
  for (const eachInput of allInput) {
    userInputArray.push(eachInput.value)
  }
  console.log(userInputArray);
}