import {LANG_OBJ} from "../App/const";

export const LANG_FORM_PROP:ILangForm = {
    10 : LANG_OBJ.RU,
    20 : LANG_OBJ.EN,

}

export const LANGUAGE = {
   RU : LANG_FORM_PROP["10"],
   EN : LANG_FORM_PROP["20"]
}

interface ILangForm {
    [propName: number]: typeof LANG_OBJ,
}