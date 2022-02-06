export enum LANG {
    EN = 'en',
    RU = 'ru'
};

export enum COUNTRY_RU {
    UA = 'Украина',
    RU = 'Россия',
    BY = 'Белорусия',
};
export enum COUNTRY_EN {
    UA = 'Ukraine',
    RU = 'Russia',
    BY = 'Belarus',
};

export enum COUNTRY_CODE {
    'Украина' = 'ua',
    'Россия' = 'ru',
    'Белорусия' = 'by',
    'Ukraine' = 'ua',
    'Russia' = 'ru',
    'Belarus' = 'by',
};

export const LANG_OBJ = Object.create(LANG);
export const COUNTRY_OBJ_RU = Object.create(COUNTRY_RU);
export const COUNTRY_OBJ_EN = Object.create(COUNTRY_EN);
export const COUNTRY_CODE_OBJ = Object.create(COUNTRY_CODE);
