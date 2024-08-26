import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Режим: development || production
const mode = import.meta.env.MODE

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: mode === 'development',

    interpolation: {
      escapeValue: false
    }
  })

  export default i18n;