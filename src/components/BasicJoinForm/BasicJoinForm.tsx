import {Alert, Box, Button, FormControl, Grid, Grow, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import * as React from 'react';
import {useContext} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import {LANG} from "../App/const";
import {LANGUAGE} from "./const";
import {validate} from "./validator";
import {weatherData} from "../../utils/const";



export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit, children, title, withOptions = false, submitButtonText, showAlert = false, onCloseAlert,} = props;
    const [chat, me, socket] = useContext(MyContext);
    const styles = useStyles();
    console.log(weatherData.filter(item=> {
        return item.country === "RU"
    }))
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: '',
            language: LANGUAGE.RU,
        },
        validate: (values) => validate(values, withOptions),

        onSubmit: (values) => {
            const {name, password, city, country, language, email} = values
            try {
                onSubmit && onSubmit({name, password, city, country, language, email});
            } catch (e) {
                console.log(e);
            }

        },
    });
    return (
        <form className={styles.root} onSubmit={formik.handleSubmit}>
            <Box className={styles.alert}>
                <Grow in={showAlert}>{
                    <Alert onClose={onCloseAlert} severity="info">{withOptions
                    ? 'Введите имя которое будет использовано для регистрации и отправки сообщений в чате'
                    : 'Введите имя указанное в процессе регистрации'}</Alert>
                }
                </Grow>
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
                  direction={'column'} gap={2}>
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
                <div className={styles.fieldWrapper}>
                    <TextField autoFocus variant="filled"
                               onChange={formik.handleChange}
                               value={formik.values.email}
                               required
                               id="email" name="email" label="email"
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
                                   id="name" name="name" label="name"
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
                               id="password" name="password" label="password"
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
                        <TextField variant="filled"
                                   onChange={formik.handleChange}
                                   value={formik.values.country}
                                   id="country" name="country" label="country"
                        />
                        {/*<TextField variant="filled"*/}
                        {/*           onChange={formik.handleChange}*/}
                        {/*           value={formik.values.city}*/}
                        {/*           id="city" name="city" label="city"*/}
                        {/*/>*/}
                        <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                            <InputLabel id="select-city-label">Город</InputLabel>
                            <Select
                                labelId="select-city-label"
                                id="city"
                                label="city"
                                name="city"
                                onChange={formik.handleChange}
                                // defaultValue={LANGUAGE.RU}
                            >
                                {/*{  // @ts-ignore*/}
                                {/*    cityData.map(city=> {*/}
                                {/*        return < MenuItem value={city.id}>{city.name}</MenuItem>*/}
                                {/*    }) }*/}
                            </Select>
                        </FormControl>
                    </>
                )
                }
                <Button type="submit" disabled={!formik.isValid || !formik.dirty} color={'info'}
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
