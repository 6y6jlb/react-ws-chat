import * as React from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import axios from "axios";


export const Registration: React.FC<Props> = () => {

const onSubmit = (username:string,password:string)=>{
    console.log (username,password);
    const apiUrl = 'http://localhost:5000/auth/registration';
    axios.post(apiUrl,{
        username,password
    }).then((response) => {
        const allPersons = response.data;
        console.log (allPersons);
    });
}

    return (
        <BasicJoinForm onSubmit={onSubmit} submitButtonText={"Зарегистрироваться"}>
            <strong> Регистрация </strong>
        </BasicJoinForm>
    );
};
type Props = {};
