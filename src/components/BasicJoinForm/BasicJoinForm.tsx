import {Alert, Box, Button, FormControl, Grid, Grow, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import * as React from 'react';
import {useContext, useEffect} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import {COUNTRY_CODE_OBJ, LANG} from "../App/const";
import {LANGUAGE} from "./const";
import {validate} from "./validator";
import {LS} from "../../utils/const";
import {FormattedMessage} from "react-intl";
import {CitySelectForm} from "../common/CitySelectForm";
import {CountrySelectForm} from "../common/CountrySelectForm/CountrySelectForm";
import {LangSelectForm} from "../common/LanguageSelectForm";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {onSubmit, children, title, withOptions = false, submitButtonText, showAlert = false, onCloseAlert,} = props;
    const [chat, me, socket] = useContext(MyContext);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: 0,
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
        me.saveLang(formik.values.lang.toLowerCase())
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
                    <LangSelectForm onChange={formik.handleChange}/>
                )}
                <div className={styles.fieldWrapper}>
                    <TextField autoFocus variant="filled"
                               onChange={formik.handleChange}
                               value={formik.values.email}
                               required
                               id="email" name="email" label={<FormattedMessage id={'email'}/>}
                    />
                    <Box className={styles.validatorMessage}>
                        <Grow in={!!formik.errors.email}>{
                            <Alert severity="error">{formik.errors.email}</Alert>
                        }
                        </Grow>
                    </Box>
                </div>
                {withOptions && (
                    <div className={styles.fieldWrapper}>
                        <TextField variant="filled"
                                   onChange={formik.handleChange}
                                   value={formik.values.name}
                                   required
                                   id="name" name="name" label={<FormattedMessage id={'name'}/>}
                        />
                        <Box className={styles.validatorMessage}>
                            <Grow in={!!formik.errors.name}>{
                                <Alert severity="error">{formik.errors.name}</Alert>
                            }
                            </Grow>
                        </Box>
                    </div>
                )}

                <div className={styles.fieldWrapper}>
                    <TextField inputProps={{
                        autoComplete: 'new-password',
                        form: {
                            autoComplete: 'off',
                        },
                    }} variant="filled"
                               onChange={formik.handleChange}
                               value={formik.values.password} type="password"
                               id="password" name="password" label={<FormattedMessage id={'password'}/>}
                    />
                    <Box className={styles.validatorMessage}>
                        <Grow in={!!formik.errors.password}>{
                            <Alert severity="error">{formik.errors.password}</Alert>
                        }
                        </Grow>
                    </Box>
                </div>
                {withOptions && (
                    <>
                        <CountrySelectForm lang={formik.values.lang} onChange={formik.handleChange}/>
                        {formik.values.country && (
                            <CitySelectForm onChange={formik.handleChange} countryValue={formik.values.country}/>
                        )}
                    </>
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
    city?: number,
    country?: string,
    language?: any
}
