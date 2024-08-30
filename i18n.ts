import i18n from 'i18next'
import Backend from 'i18next-chained-backend';
import FsBackend from 'i18next-fs-backend';
import HtmlBackend from 'i18next-http-backend';
import Middleware from 'i18next-http-middleware';

await i18n
    .use(Backend)
    .use(Middleware.LanguageDetector)
    .init({
        supportedLngs: ['en', 'fr', 'dev'],
        load: 'languageOnly',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // react already safes from xss
        },
        backend: {
            backends: [
                FsBackend,
                HtmlBackend
            ],
            backendOptions: [
                {
                    loadPath: 'public/locales/{{lng}}/{{ns}}.json',
                    addPath: 'public/locales/{{lng}}/{{ns}}.missing.json'
                },
                {
                    loadPath: '/locales/{{lng}}/{{ns}}.json',
                }
            ]
        }
    }).then();

export default i18n;