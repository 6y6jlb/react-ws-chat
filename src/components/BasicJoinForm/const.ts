import {LANG_OBJ, COUNTRY_OBJ_RU, COUNTRY_OBJ_EN, LANG} from "../App/const";

export const LANG_FORM_PROP: ILangForm = {
    10: LANG_OBJ.RU,
    20: LANG_OBJ.EN,

}
export const COUNTRY_FORM_PROP: ICountryForm = {
    10: COUNTRY_OBJ_RU.RU,
    20: COUNTRY_OBJ_RU.BY,
    30: COUNTRY_OBJ_RU.UA,
    40: COUNTRY_OBJ_EN.RU,
    50: COUNTRY_OBJ_EN.BY,
    60: COUNTRY_OBJ_EN.UA,

}

export const LANGUAGE = {
    RU: LANG_FORM_PROP["10"],
    EN: LANG_FORM_PROP["20"]
}
export const COUNTRY = {
    RU_RU: COUNTRY_FORM_PROP["10"],
    BY_RU: COUNTRY_FORM_PROP["20"],
    UA_RU: COUNTRY_FORM_PROP["30"],
    RU_EN: COUNTRY_FORM_PROP["40"],
    BY_EN: COUNTRY_FORM_PROP["50"],
    UA_EN: COUNTRY_FORM_PROP["60"]
}

export const LANGUAGES:ILanguages = {
    [LANG.RU]:[COUNTRY.RU_RU, COUNTRY.UA_RU, COUNTRY.BY_RU],
    [LANG.EN]:[COUNTRY.RU_EN, COUNTRY.UA_EN, COUNTRY.BY_EN]
}

interface ILangForm {
    [propName: number]: typeof LANG_OBJ,
}

interface ICountryForm {
    [propName: number]: typeof COUNTRY_OBJ_RU | typeof COUNTRY_OBJ_EN,
}

interface ILanguages {
    [propName: string]: LANG[],
}
