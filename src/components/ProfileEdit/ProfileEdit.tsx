import * as React from 'react';
import {useFormik} from "formik";
import {LANGUAGE} from "../BasicJoinForm/const";
import {COUNTRY_CODE_OBJ} from "../App/const";
import {useContext} from "react";
import {MyContext} from "../../state/context";
import {ProfileEditForm} from "./ProfileEditForm";


interface IProps {
}

export const ProfileEdit: React.FC<IProps> = (props) => {
    const {children} = props;
    const [chat, me, socket] = useContext(MyContext);

    const onSubmit = async (values: EditProfileFormValues) => {
        const {country, language, city, password, name, email} = values
        await me.registration({name, email, password, city, country, language});
    };
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: 0,
            lang: LANGUAGE.RU,
        },
        validate: (values) => {
        },

        onSubmit: (values) => {
            const {name, password, city, country, lang, email} = values;
            try {
                onSubmit && onSubmit({name, password, city, country: COUNTRY_CODE_OBJ[country], language: lang, email});
            } catch (e) {
                console.log(e);
            }

        },
    });


    return (
        <>
            <ProfileEditForm formik={formik}/>
        </>
    );
};

export interface EditProfileFormValues {
    name: string,
    email: string,
    password: string,
    city?: number,
    country?: string,
    language?: number
}
