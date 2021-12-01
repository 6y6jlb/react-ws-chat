import {Alert, Button, Grid, TextField} from '@mui/material';
import * as React from 'react';
import {useContext, useState} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";
import classNames from "classnames";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit, children, submitButtonText, isRegistration = false,showAlert = false} = props;
    const [chat, me, socket] = useContext ( MyContext );
    const styles = useStyles ();

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
        <form  onSubmit={ formik.handleSubmit }>
            <Grid className={ styles.root } container justifyContent={ "center" } alignItems={ "center" }
                  direction={ 'column' } gap={ 1 }>
                { children }
                <div className={styles.fieldRoot}>
                    <TextField autoFocus autoComplete={'off'} variant="filled"
                              onChange={ formik.handleChange }
                              value={ formik.values.name }
                              id="name" name="name" label="name"
                />
                     <Alert className={classNames( styles.alert,{[styles.activeAlert]:showAlert}) }
                             severity="info">{ isRegistration
                        ? 'Введите имя которое будет использовано для регистрации и отправки сообщений в чате'
                        : 'Введите имя указанное в процессе регистрации' }</Alert>
                </div>
                <div className={styles.fieldRoot}>
                    <TextField autoComplete={'off'} variant="filled"
                              onChange={ formik.handleChange }
                              value={ formik.values.password } type="password"
                              id="password" name="password" label="password"
                />
                      <Alert className={classNames( styles.alert,{[styles.activeAlert]:showAlert}) }
                             severity="info">{ isRegistration
                        ? 'Введите пароль который будет использован для регистрации'
                        : 'Введите пароль указанный в процессе регистрации' }</Alert>
                </div>
                <Button type="submit" disabled={ onChatDisabler } color={ 'info' }
                        variant={ 'contained' }>{ submitButtonText }</Button>
            </Grid>
        </form>
    );
};

interface IProps {
    onSubmit?: (name: string, password: string) => void;
    submitButtonText: string;
    isRegistration?: boolean;
    showAlert?: boolean;
};
