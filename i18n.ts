import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        lng: 'en', // Default language
        debug: true,
        interpolation: {
            escapeValue: false, // Not needed for react
        },
        backend: {
            loadPath: '/locales/{{lng}}/common.json', // Path to translation files
        },
        react: {
            useSuspense: false,
        },
    });

export default i18n;
