import * as React from 'react';
import {useCallback, useContext, useState} from 'react';
import {BasicJoinForm} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";
import {IUser} from "../../service/AuthService";
import {toJS} from "mobx";
import {Button, Grid} from "@mui/material";
import {ProfileDataTable} from "../ProfileData/ProfileDataTable";
import {ProfileData} from "../ProfileData/ProfileData";


interface IProps {

}

export const Profile: React.FC<IProps> = observer((props) => {
    const [chat, me, socket] = useContext ( MyContext );
    const styles = useStyles();
    const {children} = props;
    const [isEdit, setIsEdit] = useState(false)
    const onEdit = useCallback(()=>setIsEdit(true),[])
    return (
        <div>
            {!isEdit ?
                <ProfileData onEdit={onEdit}/>
               : <BasicJoinForm withOptions submitButtonText="Сохранить данные" title={(
                <div className={styles.title}> редактирование профайла </div>
                )}/>}
        </div>
    );
});