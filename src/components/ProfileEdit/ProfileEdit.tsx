import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {EditProfileFormValues, ProfileEditForm} from "./ProfileEditForm";
import {Button, Grid} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {toJS} from "mobx";


interface IProps {
    toProfile: () => void;
}

export const ProfileEdit: React.FC<IProps> = (props) => {
    const {children, toProfile} = props;
    const [chat, me, socket,utility, settings] = useContext(MyContext);

    const initialValues:EditProfileFormValues = {
        city: me.me.location.city,
        country: me.me.location.country,
        language: me.me.language,
        email: me.me.email,
        name: me.me.name,
        counterWidget: settings.options.counterWidget,
        weatherWidget: settings.options.weatherWidget,
        colorScheme: settings.options.theme,
    }

    const onSubmit = async (values: EditProfileFormValues) => {
        debugger
        const {country, language, city, name, email,counterWidget,weatherWidget,colorScheme} = values
        await settings.setOptions({name, email, city, country, language,counterWidget,weatherWidget,colorScheme});
    };

    return (
        <Grid container justifyContent={"center"} alignItems={"center"}
              direction={'column'} gap={2}>
            <ProfileEditForm onSubmit={onSubmit} initialValues={initialValues}/>
            <Button form='edit-profile' type='submit'  color='info' variant='contained'>
                <FormattedMessage
                id="button.save.data"/></Button>
            <Button onClick={toProfile} color='warning' variant='contained'>
                <FormattedMessage
                id="button.abort"/></Button>
        </Grid>
    );
};

