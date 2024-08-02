// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import en from './locales/en/translation.json';
import jp from './locales/jp/translation.json';

// Define your resource structure

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      jp: { translation: jp },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
