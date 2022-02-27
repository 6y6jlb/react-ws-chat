import * as React from 'react';
import {useContext} from 'react';
import {EditProfileFormValues, ProfileEditForm} from "./ProfileEditForm";
import {Button, Grid} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


interface IProps {
    toProfile: () => void;
}

export const ProfileEdit: React.FC<IProps> = (props) => {
    const {children, toProfile} = props;
    const {meStore,settingStore} = useContext(StoreContext);

    const initialValues:EditProfileFormValues = {
        city: meStore.me.location.city,
        country: meStore.me.location.country,
        language: meStore.me.language,
        email: meStore.me.email,
        name: meStore.me.name,
        counterWidget: settingStore.options.counterWidget,
        weatherWidget: settingStore.options.weatherWidget,
        colorScheme: settingStore.options.theme,
    }


    const onSubmit = async (values: EditProfileFormValues) => {
        const {country, language, city, name, email,counterWidget,weatherWidget,colorScheme} = values
        await settingStore.setOptions({ counterWidget:counterWidget,weatherWidget:weatherWidget,theme:colorScheme});
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

