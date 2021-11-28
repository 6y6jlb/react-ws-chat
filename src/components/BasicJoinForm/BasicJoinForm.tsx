import {Button, Grid, TextField} from '@mui/material';
import * as React from 'react';
import {useContext} from 'react';
import {useFormik} from "formik";
import {MyContext} from "../../state/context";
import {useStyles} from "./styles";


export const BasicJoinForm: React.FC<IProps> = (props) => {
    const {onSubmit,children,submitButtonText} = props;
    const [chat, me, socket] = useContext ( MyContext );
    const styles = useStyles ();

    const formik = useFormik ( {
        initialValues: {
            name: '',
            password: '',
        },
        onSubmit: (values) => {
            try {
                onSubmit && onSubmit (values.name,values.password);
            } catch (e) {
                console.log ( e );
            }

        },
    } );

    const onChatDisabler = (formik.values?.name === '') || formik.values.name.trim ().length < 3 || (formik.values?.password === '') || formik.values.password.trim ().length < 3;

    return (
        <form onSubmit={ formik.handleSubmit }>

            <Grid className={ styles.root } container justifyContent={ "center" } alignItems={ "center" }
                  direction={ 'column' } gap={ 1 }>
                {children}
                <TextField variant="filled"
                           onChange={ formik.handleChange }
                           value={ formik.values.name }
                           id="name" name="name" label="name"
                />
                <TextField variant="filled"
                           onChange={ formik.handleChange }
                           value={ formik.values.password } type="password"
                           id="password" name="password" label="password"
                />
                <Button type="submit" disabled={ onChatDisabler } color={ 'info' }
                        variant={ 'contained' }>{submitButtonText}</Button>
            </Grid>
        </form>
    );
};

interface IProps {
    onSubmit?: (name:string,password:string) => void;
    submitButtonText:string;
};
