import {Alert, Box, Button, Grid, Grow} from '@mui/material';
import * as React from 'react';
import {useContext, useEffect} from 'react';
import {useFormik} from "formik";
import {useStyles} from "./styles";
import {COUNTRY_CODE_OBJ, LANG} from "../App/const";
import {LANGUAGE} from "./const";
import {validate} from "./validator";
import {LS} from "../../utils/const";
import {FormattedMessage} from "react-intl";
import LangSelect from "../common/LanguageSelect";
import {LocationSelect} from "../common/LocationSelect";
import CommonTextField from '../common/CommonTextFileld';
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {onSubmit, children, title, withOptions = false, submitButtonText, showAlert = false, onCloseAlert,} = props;
    const {meStore} = useContext(StoreContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: '',
            lang: LANGUAGE.RU,
        },
        validate: (values) => validate(values, withOptions),

        onSubmit: (values) => {
            const {name, password, city, country, lang, email} = values;
            try {
                onSubmit && onSubmit({name, password, city, country: COUNTRY_CODE_OBJ[country], language: lang, email});
            } catch (e) {
                console.log(e);
            }

        },
    });

    useEffect(() => {
        localStorage.setItem(LS.LANG, formik.values.lang.toLowerCase());
        meStore.saveLang(formik.values.lang.toLowerCase())
    }, [formik.values.lang]);


    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <Box className={styles.alert}>
                <Grow in={showAlert}>{
                    <Alert onClose={onCloseAlert} severity="info">
                        <FormattedMessage id={withOptions
                            ? 'alert.name.sign.in'
                            : 'alert.name.sign.up'}/>
                    </Alert>
                }
                </Grow>
                <Grow
                    in={showAlert}
                    style={{transformOrigin: '0 0 0'}}
                    {...(showAlert ? {timeout: 1000} : {})}
                >
                    {<Alert severity="info">
                        <FormattedMessage id={withOptions
                            ? 'alert.password.sign.in'
                            : 'alert.password.sign.up'}/>
                    </Alert>
                    }
                </Grow>
            </Box>
            <Grid container justifyContent={"center"} alignItems={"center"}
                  direction={'column'} gap={2}>
                {title}
                {withOptions && (
                    <LangSelect onChange={formik.handleChange}/>
                )}

                <CommonTextField id={'email'} title={<FormattedMessage id={'email'}/>} onChange={formik.handleChange}
                                 alert={formik.errors.email} value={formik.values.email}/>
                {withOptions && (
                    <CommonTextField id={'name'} title={<FormattedMessage id={'name'}/>} onChange={formik.handleChange}
                                     alert={formik.errors.name} value={formik.values.name}/>
                )}

                <CommonTextField id={'password'} title={<FormattedMessage id={'password'}/>}
                                 onChange={formik.handleChange}
                                 inputProps={{
                                     autoComplete: 'new-password',
                                     form: {
                                         autoComplete: 'off',
                                     },
                                 }}
                                 type="password"
                                 alert={formik.errors.password} value={formik.values.password}/>
                {withOptions && (
                    <LocationSelect city={formik.values.city} onChange={formik.handleChange} lang={formik.values.lang}
                                    country={formik.values.country as LANG}/>
                )
                }
                <Button type="submit" disabled={!formik.isValid || !formik.dirty} color={'info'}
                        variant={'contained'}>{submitButtonText}</Button>
                {children && children}
            </Grid>
        </form>
    );
};

interface IProps {
    onSubmit?: (values: IJoinFormValues) => void;
    onCloseAlert?: () => void;
    submitButtonText: React.ReactNode | string;
    withOptions?: boolean;
    showAlert?: boolean;
    title?: React.ReactNode
};

export interface IJoinFormValues {
    name: string,
    email: string,
    password: string,
    city?: string,
    country?: string,
    language?: any
}
