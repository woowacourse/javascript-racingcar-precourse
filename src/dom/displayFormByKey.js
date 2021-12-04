import generateFormByKey from './generateFormByKey.js';
import isValidFormKey from './isValidFormKey.js';

function displayFormByKey(parent, formKey) {
  if (!isValidFormKey(formKey)) return false;

  parent.appendChild(generateFormByKey(formKey));
  return true;
}

export default displayFormByKey;
