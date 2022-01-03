import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from './styles'


export const Login: React.FC = () => {
    const styles = useStyles()
    const [chat, me, socket] = useContext(MyContext);

    const onSubmit = (values:IJoinFormValues) => {
        const {password,name} = values;
        me.login(name, password)
    }

    return (
        <BasicJoinForm onSubmit={onSubmit}
                       submitButtonText={"Войти"}
                       title={(
            <div className={styles.title}> Вход </div>
        )}>

        </BasicJoinForm>
    );
};

