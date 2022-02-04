import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {EditProfileFormValues, ProfileEditForm} from "./ProfileEditForm";
import {Button, Grid} from "@mui/material";
import {FormattedMessage} from "react-intl";


interface IProps {
    toProfile: () => void;
}

export const ProfileEdit: React.FC<IProps> = (props) => {
    const {children, toProfile} = props;
    const [chat, me, socket, settings] = useContext(MyContext);

    const onSubmit = async (values: EditProfileFormValues) => {
        debugger
        const {country, language, city, password, name, email} = values
        await settings.setOptions({name, email, password, city, country, language});
    };

    return (
        <Grid container justifyContent={"center"} alignItems={"center"}
              direction={'column'} gap={2}>
            <ProfileEditForm onSubmit={onSubmit}/>
            <Button form='edit-profile' type='submit'  color='info' variant='contained'>
                <FormattedMessage
                id="button.save.data"/></Button>
            <Button onClick={toProfile} color='warning' variant='contained'>
                <FormattedMessage
                id="button.abort"/></Button>
        </Grid>
    );
};

