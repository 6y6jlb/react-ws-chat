import * as React from 'react';
import {Grid, Typography} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import LangSelect from "../common/LanguageSelect";
import {useFormik,} from "formik";
import {COUNTRY_CODE_OBJ, LANG} from "../App/const";
import RadioButtons from "../common/RadioButtons";
import {LocationSelect} from "../common/LocationSelect";
import CommonTextField from "../common/CommonTextFileld";
import {THEME} from "../../utils/const";


const commonRradioOptions = [
    {value: true, label: <FormattedMessage id={'yes'}/>},
    {value: false, label: <FormattedMessage id={'no'}/>},
]
const colorOptions = [
    {value: THEME.LIGHT, label: <FormattedMessage id={THEME.LIGHT}/>},
    {value: THEME.DART, label: <FormattedMessage id={THEME.DART}/>},
]

export const ProfileEditForm: React.FC<IProps> = (props) => {
    const {children, onSubmit, initialValues} = props;
    const styles = useStyles();
    const formik = useFormik({
        initialValues,
        validate: (values) => {
        },

        onSubmit: (values) => {
            const {name, city, country, email, language, counterWidget, weatherWidget, colorScheme} = values;
            try {
                onSubmit && onSubmit({
                    name,
                    city,
                    country: COUNTRY_CODE_OBJ[country],
                    language,
                    email,
                    counterWidget,
                    weatherWidget,
                    colorScheme
                });
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
                <LocationSelect isTable onChange={formik.handleChange} city={formik.values.city}
                                lang={formik.values.language}
                                country={formik.values.country as LANG}/>
                <RadioButtons onChange={formik.handleChange} options={commonRradioOptions} value={formik.values.weatherWidget}
                              isTable name="weatherWidget" title='widget.weather'/>
                <RadioButtons onChange={formik.handleChange} options={commonRradioOptions} value={formik.values.counterWidget}
                              isTable name="counterWidget" title='widget.online_counter'/>
                <RadioButtons onChange={formik.handleChange} options={colorOptions} value={formik.values.colorScheme}
                              isTable name="colorScheme" title='color_scheme'/>

            </Grid>
        </form>
    );
};


interface IProps {
    onSubmit: (values: EditProfileFormValues) => void;
    initialValues: EditProfileFormValues
}

export interface EditProfileFormValues {
    name: string,
    email: string,
    city: string,
    country: string,
    language: LANG | null,
    weatherWidget: boolean,
    counterWidget: boolean,
    colorScheme: THEME,
}
