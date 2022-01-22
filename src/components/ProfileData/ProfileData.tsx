import * as React from 'react';
import {useContext} from 'react';
import {useStyles} from './styles';
import {Button, Grid} from "@mui/material";
import {MyContext} from "../../state/context";
import {ProfileDataTable} from "./ProfileDataTable";

interface IProps {
    onEdit: ()=>void;
}


export const ProfileData: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const [chat, me, socket] = useContext ( MyContext );
    const {children,onEdit} = props;
    return (
        <Grid container justifyContent={"center"} alignItems={"center"} direction={"column"}>
            <ProfileDataTable data={me.me}/>
            <Button type="submit" color={'info'} onClick={onEdit}
                    variant={'contained'}>Edit</Button>
        </Grid>
    );
};