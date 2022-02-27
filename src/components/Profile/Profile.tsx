import * as React from 'react';
import {useCallback, useState} from 'react';
import {useStyles} from "./styles";
import {observer} from "mobx-react-lite";
import {ProfileData} from "../ProfileData/ProfileData";
import {ProfileEdit} from "../ProfileEdit/ProfileEdit";


interface IProps {

}

export const Profile: React.FC<IProps> = observer((props) => {
    const styles = useStyles();
    const {children} = props;
    const [isEdit, setIsEdit] = useState(false)
    const toEdit = useCallback(()=>setIsEdit(true),[])
    const toProfile = useCallback(()=>setIsEdit(false),[])
    return (
        <div>
            {!isEdit
                ? <ProfileData onEdit={toEdit}/>
               : <>
                    <ProfileEdit toProfile={toProfile}/>
                </>}
        </div>
    );
});