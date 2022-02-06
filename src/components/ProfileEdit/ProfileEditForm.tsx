import * as React from 'react';
import {Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import LangSelect from "../common/LanguageSelect";
import {useFormik,} from "formik";
import {LANGUAGE} from "../BasicJoinForm/const";
import {COUNTRY_CODE_OBJ} from "../App/const";
import RadioButtons from "../common/RadioButtons";
import SwitchButton from "../common/SwitchButton";
import {LocationSelect} from "../common/LocationSelect";
import CommonTextField from "../common/CommonTextFileld";


export const ProfileEditForm: React.FC<IProps> = (props) => {
    const {children, onSubmit} = props;
    const styles = useStyles();

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
        <form id='edit-profile' className={styles.root} onSubmit={formik.handleSubmit}>
            <Grid classes={{root: styles.contentWrapper}} container justifyContent={"center"} alignItems={"center"}
                  direction={'column'} gap={2}>
                <Typography variant={'h6'}><FormattedMessage id={'settings.changing'}/></Typography>
                <LangSelect isTable onChange={formik.handleChange}/>
                <CommonTextField id={'name'} title={<FormattedMessage id={'name'}/>} onChange={formik.handleChange}
                                 alert={formik.errors.name} value={formik.values.name} isTable/>
                <CommonTextField id={'email'} title={<FormattedMessage id={'email'}/>} onChange={formik.handleChange}
                                 alert={formik.errors.email} value={formik.values.email} isTable/>
                <LocationSelect isTable onChange={formik.handleChange} lang={formik.values.lang}
                                country={formik.values.country}/>
                <RadioButtons isTable title={<FormattedMessage id={'widget.weather'}/>}/>
                <RadioButtons isTable title={<FormattedMessage id={'widget.online_counter'}/>}/>
                <SwitchButton isTable title={<FormattedMessage id={'color_scheme'}/>}/>

            </Grid>
        </form>
    );
};


interface IProps {
    onSubmit: (values: EditProfileFormValues) => void;
}

export interface EditProfileFormValues {
    name: string,
    email: string,
    password: string,
    city?: number,
    country?: string,
    language?: number
}
