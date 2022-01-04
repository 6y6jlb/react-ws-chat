import {Alert, Box, Button, FormControl, Grid, Grow, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import * as React from 'react';
import {useContext, useMemo} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import {LANG} from "../App/const";
import {LANGUAGE} from "./const";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit, children, title, withOptions = false, submitButtonText, showAlert = false, onCloseAlert} = props;
    const [chat, me, socket] = useContext(MyContext);
    const styles = useStyles();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: '',
            language:LANGUAGE.RU,
        },

        onSubmit: (values) => {
            const {name, password, city, country, language,email} = values
            try {
                onSubmit && onSubmit({name, password, city, country, language , email});
            } catch (e) {
                console.log(e);
            }

        },
    });

    const onChatDisabler = useMemo(() => {
        return (formik.values?.name === '')
            || formik.values.name.trim().length < 3
            || (formik.values?.password === '')
            || formik.values.password.trim().length < 3
    }, [formik]);
    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <Box className={styles.alert}>
                <Grow in={showAlert}>{<Alert onClose={onCloseAlert} severity="info">{withOptions
                    ? 'Введите имя которое будет использовано для регистрации и отправки сообщений в чате'
                    : 'Введите имя указанное в процессе регистрации'}</Alert>}</Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={showAlert}
                    style={{transformOrigin: '0 0 0'}}
                    {...(showAlert ? {timeout: 1000} : {})}
                >
                    {<Alert severity="info">{withOptions
                        ? 'Введите пароль который будет использован для регистрации'
                        : 'Введите пароль указанный в процессе регистрации'}</Alert>}
                </Grow>
            </Box>
            <Grid container justifyContent={"center"} alignItems={"center"}
                  direction={'column'} gap={1}>
                {title}
                {withOptions && (
                    <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                        <InputLabel id="select-label">Язык</InputLabel>
                        <Select
                            labelId="select-label"
                            id="lang"
                            label="lang"
                            name="lang"
                            onChange={formik.handleChange}
                            defaultValue={LANGUAGE.RU}
                        >
                            <MenuItem value={LANGUAGE.RU}>{LANG.RU}</MenuItem>
                            <MenuItem value={LANGUAGE.EN}>{LANG.EN}</MenuItem>
                        </Select>
                    </FormControl>
                )}
                <TextField autoFocus variant="filled"
                           onChange={formik.handleChange}
                           value={formik.values.email}
                           id="email" name="email" label="email"
                />
                {withOptions && (
                    <TextField variant="filled"
                               onChange={formik.handleChange}
                               value={formik.values.name}
                               id="name" name="name" label="name"
                    />
                )}

                <TextField inputProps={{
                    autoComplete: 'new-password',
                    form: {
                        autoComplete: 'off',
                    },
                }} variant="filled"
                           onChange={formik.handleChange}
                           value={formik.values.password} type="password"
                           id="password" name="password" label="password"
                />
                {withOptions && (
                    <>
                        <TextField variant="filled"
                                   onChange={formik.handleChange}
                                   value={formik.values.country}
                                   id="country" name="country" label="country"
                        />
                        <TextField variant="filled"
                                   onChange={formik.handleChange}
                                   value={formik.values.city}
                                   id="city" name="city" label="city"
                        />
                    </>
                )
                }
                <Button type="submit" disabled={onChatDisabler} color={'info'}
                        variant={'contained'}>{submitButtonText}</Button>
            </Grid>
        </form>
    );
};

interface IProps {
    onSubmit?: (values: IJoinFormValues) => void;
    onCloseAlert?: () => void;
    submitButtonText: string;
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
    language?: number
}
