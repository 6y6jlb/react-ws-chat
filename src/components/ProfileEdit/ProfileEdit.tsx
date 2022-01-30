import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {EditProfileFormValues, ProfileEditForm} from "./ProfileEditForm";


interface IProps {
}

export const ProfileEdit: React.FC<IProps> = (props) => {
    const {children} = props;
    const [chat, me, socket] = useContext(MyContext);

    const onSubmit = async (values: EditProfileFormValues) => {
        const {country, language, city, password, name, email} = values
        await me.registration({name, email, password, city, country, language});
    };

    return (
        <>
            <ProfileEditForm onSubmit={onSubmit}/>
        </>
    );
};

