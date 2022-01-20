import * as React from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from "./styles";
import {useContext, useState} from "react";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";
import {IUser} from "../../service/AuthService";
import {toJS} from "mobx";


interface IProps {

}

export const Profile: React.FC<IProps> = observer((props) => {
    const [chat, me, socket] = useContext ( MyContext );
    const styles = useStyles();
    const {children} = props;
    const [isEdit, setIsEdit] = useState(true)
    const { id,name,language,email,location,isActivated} = me.me as IUser
    console.log(toJS(me.me))
    return (
        <div>
            {!isEdit ? <>
                    <div>{name}</div>
                    <div>{language}</div>
                    <div>{email}</div>
                    <div>{location.country}</div>
                    <div>{location.city}</div>
                </>
               : <BasicJoinForm withOptions submitButtonText="Сохранить данные" title={(
                <div className={styles.title}> редактирование профайла </div>
                )}/>}
        </div>
    );
});