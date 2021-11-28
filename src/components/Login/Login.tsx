import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";


export const Login: React.FC<IProps> = (props) => {
    const {connect} = props;
    const [chat, me, socket] = useContext ( MyContext );
    const setMe = (value:string) => me.setMe ( {id: Date.now ().toString (), name: value} );


    const onSubmit=(name:string,password:string)=>{
        connect ();
        setMe(name)
    }

    return (
        <BasicJoinForm onSubmit={onSubmit} submitButtonText={"Войти"}>
            <strong> Вход </strong>
        </BasicJoinForm>
    );
};

interface IProps {
    connect: () => void;
};
