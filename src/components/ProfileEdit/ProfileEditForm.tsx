import * as React from 'react';
import {Alert, Box, Grid, Grow, TextField} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import {CitySelectForm} from "../common/CitySelectForm";
import {LangSelectForm} from "../common/LanguageSelectForm";
import {CountrySelectForm} from "../common/CountrySelectForm";
import HelpIcon from "@mui/icons-material/Help";
import {FormikProps,} from "formik";
import {EditProfileFormValues} from "./ProfileEdit";


export const ProfileEditForm: React.FC<IProps> = (props) => {
    const {children, formik} = props;
    const styles = useStyles();

    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <Grid container justifyContent={"center"} alignItems={"center"}
                  direction={'column'} gap={2}>
                <div >
                        <FormattedMessage id={'button.sign.up'}/>
                    <HelpIcon/>
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
                        <CountrySelectForm lang={formik.values.language} onChange={formik.handleChange}/>
                        {formik.values.country && (
                            <CitySelectForm onChange={formik.handleChange} countryValue={formik.values.country}/>
                        )}
                    </>

            </Grid>
        </form>
    );
};


interface IProps {
    formik: FormikProps<EditProfileFormValues>
}
