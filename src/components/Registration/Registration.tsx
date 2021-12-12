import * as React from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import axios from "axios";
import HelpIcon from "@mui/icons-material/Help";
import {useStyles} from "./styles";
import {useCallback, useState} from "react";
import AuthService from "../../service/AuthService";


export const Registration: React.FC<Props> = () => {
    const styles = useStyles ();
    const [showAlert,setShowAlert] = useState(false);
    let timeOutId: NodeJS.Timeout;
    const onSubmit = (username:string,password:string)=>{
    AuthService.registration(username,password).then(result=>console.log(result))
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
            <div  className={styles.children} onClick={showAlert ? onCloseAlert : onShowAlert}><strong> Регистрация </strong> <HelpIcon /></div>
        </BasicJoinForm>
    );
};
type Props = {};
