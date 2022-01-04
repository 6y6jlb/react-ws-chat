import * as React from 'react';
import {useCallback, useContext, useState} from 'react';
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import HelpIcon from "@mui/icons-material/Help";
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";


export const Registration: React.FC<Props> = () => {
    const styles = useStyles();
    const [showAlert, setShowAlert] = useState(false);
    const [chat, me, socket] = useContext(MyContext);
    let timeOutId: NodeJS.Timeout;
    const onSubmit = async (values:IJoinFormValues) => {
        const {country,language,city,password,name,email} = values
        await me.registration({name,email, password, city, country, language});
    };

    const onShowAlert = useCallback(() => {
        setShowAlert(true);
        timeOutId = setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    }, []);
    const onCloseAlert = useCallback(() => {
        setShowAlert(false);
        clearTimeout(timeOutId);
    }, []);

    return (
        <BasicJoinForm
            onCloseAlert={onCloseAlert}
            showAlert={showAlert}
            onSubmit={onSubmit}
            submitButtonText={"Зарегистрироваться"}
            withOptions
            title={(
                <div className={styles.children} onClick={showAlert ? onCloseAlert : onShowAlert}>
                    <div className={styles.title}> Регистрация</div>
                    <HelpIcon/>
                </div>
            )}>
        </BasicJoinForm>
    );
};
type Props = {};
