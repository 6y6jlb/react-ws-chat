import * as React from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import HelpIcon from "@mui/icons-material/Help";
import {useStyles} from "./styles";
import {useCallback, useContext, useState} from "react";
import {MyContext} from "../../state/context";


export const Registration: React.FC<Props> = () => {
    const styles = useStyles ();
    const [showAlert,setShowAlert] = useState(false);
    const [chat, me, socket] = useContext ( MyContext );
    let timeOutId: NodeJS.Timeout;
    const onSubmit = (username:string,password:string)=>{
   me.registration(username,password)
}

    const onShowAlert = useCallback(() => {
        setShowAlert(true);
        timeOutId = setTimeout(()=>{
            setShowAlert(false)
        },5000)
    },[])
    const onCloseAlert = useCallback(() => {
        setShowAlert(false);
        clearTimeout(timeOutId)
    },[])

    return (
        <BasicJoinForm onCloseAlert={onCloseAlert} showAlert={showAlert} isRegistration onSubmit={onSubmit} submitButtonText={"Зарегистрироваться"}>
            <div  className={styles.children} onClick={showAlert ? onCloseAlert : onShowAlert}><div className={styles.title}> Регистрация </div> <HelpIcon /></div>
        </BasicJoinForm>
    );
};
type Props = {};
