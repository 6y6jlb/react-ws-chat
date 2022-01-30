import * as React from 'react';
import {useContext} from 'react';
import {useStyles} from './styles';
import {Button, Grid, Typography} from "@mui/material";
import {MyContext} from "../../state/context";
import {ProfileDataTable} from "./ProfileDataTable";
import {FormattedMessage} from "react-intl";

interface IProps {
    onEdit: ()=>void;
}


export const ProfileData: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const [chat, me, socket,utility,settings] = useContext ( MyContext );
    const {children,onEdit} = props;
    const data = {...me.me, ...settings.options}
    return (
        <Grid classes={{root:styles.profileDataRoot}} container justifyContent={"center"} alignItems={"center"} direction={"column"}>
            <Typography variant={'h6'} >
                <FormattedMessage id={'button.profile'}/>
            </Typography>
            <ProfileDataTable data={data}/>
            <Button type="submit" color={'info'} onClick={onEdit}
                    variant={'contained'}> <FormattedMessage id={'button.edit'}/></Button>
        </Grid>
    );
};