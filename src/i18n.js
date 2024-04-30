// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationEN from './locales/en/translation.json';
import translationJA from './locales/ja/translation.json';

// Define your resource structure
const resources = {
  en: {
    translation: translationEN,
  },
  ja: {
    translation: translationJA,
  },
};

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources,
    lng: "en", // Initial language.
    fallbackLng: "en", // Use English if translation is not available.
    interpolation: {
      escapeValue: false // React already safes from XSS.
    }
  });

export default i18n;
