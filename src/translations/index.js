// Strings IT = Italian
import itStrings from './lang-it.json';

// Strings EN = English
import enStrings from './lang-en.json';

const translationMessages = {
  en: { ...enStrings },
  it: { ...itStrings }
};

export default translationMessages;
