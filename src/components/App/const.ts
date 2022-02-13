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
export const COUNTRY_CODE_RU = {
    ['ua']: 'Украина',
    ['ru']: 'Россия',
    ['by']: 'Белорусия',
};
export const COUNTRY_CODE_EN = {
    ['ua']: 'Ukraine',
    ['ru']: 'Russia',
    ['by']: 'Belarus',
};

export const COUNTRY_LANG_OBJ = {
    [LANG.EN]:Object.keys(COUNTRY_EN),
    [LANG.RU]:Object.keys(COUNTRY_RU),
}
export const LANG_OBJ = Object.create(LANG);
export const COUNTRY_OBJ_RU = Object.create(COUNTRY_RU);
export const COUNTRY_OBJ_EN = Object.create(COUNTRY_EN);
export const COUNTRY_CODE_OBJ = Object.create(COUNTRY_CODE);

export type CountryCodeType = 'ua' | 'ru' | 'by'
