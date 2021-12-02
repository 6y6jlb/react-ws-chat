import {Alert, Box, Button, Grid, Grow, TextField} from '@mui/material';
import * as React from 'react';
import {useContext, useState} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import classNames from "classnames";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit, children, submitButtonText, isRegistration = false,showAlert = false,onCloseAlert} = props;
    const [chat, me, socket] = useContext ( MyContext );
    const styles = useStyles ();
    console.log (showAlert);
    const formik = useFormik ( {
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: (values) => {
            try {
                onSubmit && onSubmit ( values.name, values.password );
            } catch (e) {
                console.log ( e );
            }

        },
    } );

    const onChatDisabler = (formik.values?.name === '')
        || formik.values.name.trim ().length < 3
        || (formik.values?.password === '')
        || formik.values.password.trim ().length < 3;

    return (
        <form className={ styles.root }  onSubmit={ formik.handleSubmit }>
            <Box className={styles.alert} >
                <Grow in={showAlert}>{<Alert onClose={onCloseAlert} severity="info">{ isRegistration
                    ? 'Введите имя которое будет использовано для регистрации и отправки сообщений в чате'
                    : 'Введите имя указанное в процессе регистрации' }</Alert>}</Grow>
                {/* Conditionally applies the timeout prop to change the entry speed. */}
                <Grow
                    in={showAlert}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(showAlert ? { timeout: 1000 } : {})}
                >
                    { <Alert severity="info">{ isRegistration
                        ? 'Введите пароль который будет использован для регистрации'
                        : 'Введите пароль указанный в процессе регистрации' }</Alert>}
                </Grow>
            </Box>
            <Grid  container justifyContent={ "center" } alignItems={ "center" }
                  direction={ 'column' } gap={ 1 }>
                { children }
                    <TextField autoFocus autoComplete={'off'} variant="filled"
                              onChange={ formik.handleChange }
                              value={ formik.values.name }
                              id="name" name="name" label="name"
                />

                    <TextField autoComplete={'off'} variant="filled"
                              onChange={ formik.handleChange }
                              value={ formik.values.password } type="password"
                              id="password" name="password" label="password"
                />

                <Button type="submit" disabled={ onChatDisabler } color={ 'info' }
                        variant={ 'contained' }>{ submitButtonText }</Button>
            </Grid>
        </form>
    );
};

interface IProps {
    onSubmit?: (name: string, password: string) => void;
    onCloseAlert?: () => void;
    submitButtonText: string;
    isRegistration?: boolean;
    showAlert?: boolean;
};
