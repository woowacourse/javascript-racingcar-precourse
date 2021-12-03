function generateFormTagById(
  { formId, inputId, buttonId },
  { inputType, buttonType },
  buttonText
) {
  const form = document.createElement('form');
  form.id = formId;

  const input = document.createElement('input');
  input.id = inputId;
  input.type = inputType;

  const button = document.createElement('button');
  button.id = buttonId;
  button.type = buttonType;
  button.innerText = buttonText;

  form.appendChild(input);
  form.appendChild(button);

  return form;
}

export default generateFormTagById;
