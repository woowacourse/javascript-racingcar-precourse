import generateForm from './utils/generateForm.js';
import isValidFormKey from './isValidFormKey.js';
import { DICT_ID_FORM_ELEMENTS, DICT_TYPE_FORM_ELEMENTS } from './const.js';

function generateFormByKey(formKey) {
  if (!isValidFormKey(formKey)) return undefined;

  const idDictionary = DICT_ID_FORM_ELEMENTS[formKey];
  const typeDictionary = DICT_TYPE_FORM_ELEMENTS[formKey];
  return generateForm(idDictionary, typeDictionary);
}

export default generateFormByKey;
