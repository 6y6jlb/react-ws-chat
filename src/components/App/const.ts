export enum LANG {
    EN = 'EN',
    RU = 'RU'
};

export enum COUNTRY {
    UA = 'Украина',
    RU = 'Россия',
    BY = 'Белорусия',
};

export enum COUNTRY_CODE {
    'Украина' = 'UA',
    'Россия' = 'RU',
    'Белорусия' = 'BY',
};

export const LANG_OBJ = Object.create(LANG);
export const COUNTRY_OBJ = Object.create(COUNTRY);
export const COUNTRY_CODE_OBJ = Object.create(COUNTRY_CODE);
