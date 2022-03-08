import * as React from 'react';
import {useContext} from 'react';
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from './styles'
import {FormattedMessage} from "react-intl";
import {useHistory} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


export const Login: React.FC = () => {
    const styles = useStyles()
    const {meStore} = useContext(StoreContext);
    const history = useHistory()

    const onSubmit = (values:IJoinFormValues) => {
        const {password,email} = values;
            meStore.login(email, password)
                .then(()=> history.push(ROUTES.CHAT_ROUTE))
    }

    return (
        <>
            <BasicJoinForm onSubmit={onSubmit}
                          submitButtonText={<FormattedMessage id={'button.sign.in'}/>}
                          title={(
                              <div className={styles.title}>
                                  <FormattedMessage id={'button.sign.in'}/>
                              </div>
                          )}/>

        </>
    );
};

