import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from './styles'


export const Login: React.FC = () => {
    const styles = useStyles()
    const [chat, me, socket] = useContext ( MyContext );

    const onSubmit = (email:string,password:string)=>{
       me.login(email,password)
    }

    return (
        <BasicJoinForm onSubmit={onSubmit} submitButtonText={"Войти"}>
            <div className={styles.title}> Вход </div>
        </BasicJoinForm>
    );
};

