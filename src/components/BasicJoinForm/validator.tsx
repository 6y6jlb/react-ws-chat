import {validateEmail} from "../../utils/validator";
import {IJoinFormValues} from "./BasicJoinForm";

export const validate = (values:IJoinFormValues,withOptions:boolean) => {
    const {name, password, city, country, language, email} = values
    const errors: any = {};
    if (withOptions && name.length <= 3 ) {
        errors.name = 'Required more 3 symbols';
    }
    // if (!validateEmail(email)) {
    //     errors.email = 'Incorrect';
    // }
    if (password.length <= 3) {
        errors.password = 'Required more 3 symbols';
    }
    return errors

}