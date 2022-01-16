import {LANG_OBJ,COUNTRY_OBJ} from "../App/const";

export const LANG_FORM_PROP:ILangForm = {
    10 : LANG_OBJ.RU,
    20 : LANG_OBJ.EN,

}
export const COUNTRY_FORM_PROP:ICountryForm = {
    10 : COUNTRY_OBJ.RU,
    20 : COUNTRY_OBJ.BY,
    30 : COUNTRY_OBJ.UA,

}

export const LANGUAGE = {
   RU : LANG_FORM_PROP["10"],
   EN : LANG_FORM_PROP["20"]
}
export const COUNTRY = {
   RU : COUNTRY_FORM_PROP["10"],
   BY : COUNTRY_FORM_PROP["20"],
   UA : COUNTRY_FORM_PROP["30"]
}

interface ILangForm {
    [propName: number]: typeof LANG_OBJ,
}
interface ICountryForm {
    [propName: number]: typeof COUNTRY_OBJ,
}