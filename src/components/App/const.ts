export enum LANG {
    EN = 'en',
    RU = 'ru'
};

export enum COUNTRY {
    UA = 'Украина',
    RU = 'Россия',
    BY = 'Белорусия',
};

export enum COUNTRY_CODE {
    'Украина' = 'ua',
    'Россия' = 'ru',
    'Белорусия' = 'by',
};

export const LANG_OBJ = Object.create(LANG);
export const COUNTRY_OBJ = Object.create(COUNTRY);
export const COUNTRY_CODE_OBJ = Object.create(COUNTRY_CODE);
