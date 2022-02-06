import {validateEmail} from "../../utils/validator";
import {IJoinFormValues} from "./BasicJoinForm";
import {FormattedMessage} from "react-intl";
import * as React from "react";

export const validate = (values:IJoinFormValues,withOptions:boolean) => {
    const {name, password, city, country, language, email} = values
    const errors: any = {};
    if (withOptions && name.length <= 3 ) {
        errors.name =  <FormattedMessage id={'alert.validation.symbol.three'}/> ;
    }
    // if (!validateEmail(email)) {
    //     errors.email = 'Incorrect';
    // }
    if (password.length <= 3) {
        errors.password =  <FormattedMessage id={'alert.validation.symbol.three'}/> ;
    }
    return errors

}