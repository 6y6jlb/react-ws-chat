import * as React from 'react';
import {Alert, Box, Grid, Grow, TextField} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import {CitySelectForm} from "../common/CitySelectForm";
import {LangSelectForm} from "../common/LanguageSelectForm";
import {CountrySelectForm} from "../common/CountrySelectForm";
import {useFormik,} from "formik";
import {LANGUAGE} from "../BasicJoinForm/const";
import {COUNTRY_CODE_OBJ} from "../App/const";
import {RadioButtons} from "../common/RadioButtons";


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
            <Grid container justifyContent={"center"} alignItems={"center"}
                  direction={'column'} gap={2}>
                <div>
                    <FormattedMessage id={'settings.changing'}/>
                </div>
                <LangSelectForm onChange={formik.handleChange}/>
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

                <>
                    <CountrySelectForm lang={formik.values.lang} onChange={formik.handleChange}/>
                    {formik.values.country && (
                        <CitySelectForm onChange={formik.handleChange} countryValue={formik.values.country}/>
                    )}
                </>

                <RadioButtons title={<FormattedMessage id={'widget.weather'}/>}/>
                <RadioButtons title={<FormattedMessage id={'widget.online_counter'}/>}/>
                <RadioButtons title={<FormattedMessage id={'color_scheme'}/>}/>

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
