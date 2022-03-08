import * as React from 'react';
import {useCallback, useContext, useState} from 'react';
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import HelpIcon from "@mui/icons-material/Help";
import {useStyles} from "./styles";
import {FormattedMessage} from "react-intl";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


export const Registration: React.FC<Props> = () => {
    const styles = useStyles();
    const [showAlert, setShowAlert] = useState(false);
    const {meStore,errorStore} = useContext(StoreContext);
    let timeOutId: NodeJS.Timeout;
    const onSubmit = (values:IJoinFormValues) => {
        const {country,language,city,password,name,email} = values
        meStore.registration({name,email, password, city, country, language});
    };

    const onShowAlert = useCallback(() => {
        setShowAlert(true);
        timeOutId = setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }, []);
    const onCloseAlert = useCallback(() => {
        setShowAlert(false);
        clearTimeout(timeOutId);
    }, []);

    return (
        <>
            <BasicJoinForm
            onCloseAlert={onCloseAlert}
            showAlert={showAlert}
            onSubmit={onSubmit}
            submitButtonText={<FormattedMessage id={'button.sign.up'}/>}
            withOptions
            title={(
                <div className={styles.children} onClick={showAlert ? onCloseAlert : onShowAlert}>
                    <div className={styles.title}>
                        <FormattedMessage id={'button.sign.up'}/>
                    </div>
                    <HelpIcon/>
                </div>
            )}/>
        </>
    );
};
type Props = {};
