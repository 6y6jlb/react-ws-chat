import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from './styles'
import {FormattedMessage} from "react-intl";
import {useHistory, useLocation} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import {ME_ERROR_ENUM} from "../../state/const";


export const Login: React.FC = () => {
    const styles = useStyles()
    const [chat, me, socket] = useContext(MyContext);
    const history = useHistory()

    const onSubmit = (values:IJoinFormValues) => {
        const {password,email} = values;
            me.login(email, password)
            history.push(ROUTES.CHAT_ROUTE)
    }

    return (
        <>
            {me.error[ME_ERROR_ENUM.AUTH] && <span>{ me.error[ME_ERROR_ENUM.AUTH]}</span>}
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

