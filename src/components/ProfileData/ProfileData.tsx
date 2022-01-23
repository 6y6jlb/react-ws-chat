import * as React from 'react';
import {useContext} from 'react';
import {useStyles} from './styles';
import {Button, Grid, Typography} from "@mui/material";
import {MyContext} from "../../state/context";
import {ProfileDataTable} from "./ProfileDataTable";

interface IProps {
    onEdit: ()=>void;
}


export const ProfileData: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const [chat, me, socket,utility,settings] = useContext ( MyContext );
    debugger
    const {children,onEdit} = props;
    const data = {...me.me, ...settings.options}
    return (
        <Grid classes={{root:styles.profileDataRoot}} container justifyContent={"center"} alignItems={"center"} direction={"column"}>
            <Typography variant={'h6'} >Личный кабинет</Typography>
            <ProfileDataTable data={data}/>
            <Button type="submit" color={'info'} onClick={onEdit}
                    variant={'contained'}>Edit</Button>
        </Grid>
    );
};