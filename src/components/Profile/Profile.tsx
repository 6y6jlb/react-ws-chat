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
import {FormattedMessage} from "react-intl";
import {ProfileEdit} from "../ProfileEdit/ProfileEdit";


interface IProps {

}

export const Profile: React.FC<IProps> = observer((props) => {
    const [chat, me, socket] = useContext ( MyContext );
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
            {/*        <BasicJoinForm withOptions submitButtonText={<FormattedMessage id={'button.save.data'}/>} title={(*/}
            {/*        <div className={styles.title}><FormattedMessage id={'button.profile.edit'}/></div>*/}
            {/*    )}>*/}
            {/*        < Button onClick={toProfile} size={'large'}*/}
            {/*                 variant={'contained'}>*/}
            {/*        <FormattedMessage id={'button.profile'}/>*/}
            {/*    </Button>*/}
            {/*</BasicJoinForm>*/}
                    <ProfileEdit/>
                </>}
        </div>
    );
});