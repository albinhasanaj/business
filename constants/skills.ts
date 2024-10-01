export const getSkillsData = ({ lang }: { lang: String }) => {
    let translations;
    if (lang === 'sv') {
        translations = require('@/locales/sv/lang.js');
    } else {
        translations = require('@/locales/en/lang.js');
    }

    return [
        {
            title: translations.about.skill1.title,
            text: translations.about.skill1.description
        },
        {
            title: translations.about.skill2.title,
            text: translations.about.skill2.description
        },
        {
            title: translations.about.skill3.title,
            text: translations.about.skill3.description
        },
        {
            title: translations.about.skill4.title,
            text: translations.about.skill4.description
        },
        {
            title: translations.about.skill5.title,
            text: translations.about.skill5.description
        }
    ];
};
