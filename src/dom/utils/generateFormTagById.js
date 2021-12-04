function generateFormTagById(
  { formId, inputId, buttonId },
  { inputType, buttonType }
) {
  const form = document.createElement('form');
  form.id = formId;

  const input = document.createElement('input');
  input.id = inputId;
  input.type = inputType;

  const button = document.createElement('button');
  button.id = buttonId;
  button.type = buttonType;

  form.appendChild(input);
  form.appendChild(document.createTextNode(' '));
  form.appendChild(button);

  return form;
}

export default generateFormTagById;
