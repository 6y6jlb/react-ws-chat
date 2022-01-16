import {Alert, Box, Button, FormControl, Grid, Grow, InputLabel, MenuItem, Select, TextField} from '@mui/material';
import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import {COUNTRY_CODE, COUNTRY_CODE_OBJ, LANG} from "../App/const";
import {COUNTRY, LANGUAGE} from "./const";
import {validate} from "./validator";
import {weatherData} from "../../utils/const";
import {log} from "util";
import useDebounce from "../../utils/hooks/useDebounce";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit, children, title, withOptions = false, submitButtonText, showAlert = false, onCloseAlert,} = props;
    const [chat, me, socket] = useContext(MyContext);
    const data = [...weatherData]
    const [city, setCity] = useState<string>('')
    const [filteredData, setFilteredData] = useState<Array<any>>([])
    const styles = useStyles();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            country: '',
            city: 0,
            language: LANGUAGE.RU,
        },
        validate: (values) => validate(values, withOptions),

        onSubmit: (values) => {
            const {name, password, city, country, language, email} = values
            try {
                onSubmit && onSubmit({name, password, city, country: COUNTRY_CODE_OBJ[country], language, email});
            } catch (e) {
                console.log(e);
            }

        },
    });
    const onCity = (value: string) => {
        setCity(`${city}${value}`)
    }

    const debouncedValue = useDebounce(city, 2000)

    const getCityList = () => {
        setFilteredData(
            [...data].filter(item => {
                return item.country === COUNTRY_CODE_OBJ[formik.values.country] && item.name.toLowerCase().includes(debouncedValue.toLowerCase())
            }).splice(0, 9))
        setCity('')
    }


    useEffect(() => {
        if (debouncedValue) {
            getCityList()
        }
    }, []);
    useEffect(() => {
        if (debouncedValue) {
            getCityList()
        }
    }, [debouncedValue, formik.values.country]);

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

                        <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                            <InputLabel id="select-country-label">Страна</InputLabel>
                            <Select
                                labelId="select-country-label"
                                id="country"
                                label="country"
                                name="country"
                                onChange={formik.handleChange}
                            >
                                <MenuItem value={COUNTRY.RU}>{COUNTRY.RU}</MenuItem>
                                <MenuItem value={COUNTRY.UA}>{COUNTRY.UA}</MenuItem>
                                <MenuItem value={COUNTRY.BY}>{COUNTRY.BY}</MenuItem>
                            </Select>
                        </FormControl>

                        {formik.values.country && (
                            <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                                <InputLabel id="select-city-label">Город</InputLabel>
                                <Select
                                    labelId="select-city-label"
                                    id="city"
                                    label="city"
                                    name="city"
                                    onChange={formik.handleChange}
                                    onKeyPress={(event) => onCity(event.key)}
                                >
                                    <MenuItem value=""><em>None</em></MenuItem>
                                    {  // @ts-ignore
                                        filteredData.map((city, id) => {
                                            return < MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                                        })}
                                </Select>
                            </FormControl>
                        )}
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
    city?: number,
    country?: string,
    language?: number
}
