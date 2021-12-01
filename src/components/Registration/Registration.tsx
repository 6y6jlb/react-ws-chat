import * as React from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import axios from "axios";
import HelpIcon from "@mui/icons-material/Help";
import {useStyles} from "./styles";
import {useCallback, useState} from "react";


export const Registration: React.FC<Props> = () => {
    const styles = useStyles ();
    const [showAlert,setShowAlert] = useState(false);

    const onSubmit = (username:string,password:string)=>{
    const apiUrl = 'http://localhost:5000/auth/registration';
    axios.post(apiUrl,{
        username,password
    }).then((response) => {
        const allPersons = response.data;
        console.log (allPersons);
    });
}

    const onShowAlert = useCallback(() => {
        setShowAlert(true);
        setTimeout(()=>{
            setShowAlert(false)
        },2000)
    },[])

    return (
        <BasicJoinForm showAlert={showAlert} isRegistration onSubmit={onSubmit} submitButtonText={"Зарегистрироваться"}>
            <div className={styles.children} onClick={onShowAlert}><strong> Регистрация </strong> <HelpIcon /></div>
        </BasicJoinForm>
    );
};
type Props = {};
