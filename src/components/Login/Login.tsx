import * as React from 'react';
import {useContext} from 'react';
import {MyContext} from "../../state/context";
import {BasicJoinForm, IJoinFormValues} from "../BasicJoinForm/BasicJoinForm";
import {useStyles} from './styles'
import {FormattedMessage} from "react-intl";
import {useHistory, useLocation} from "react-router-dom";
import {ROUTES} from "../../utils/routes";


export const Login: React.FC = () => {
    const styles = useStyles()
    const [chat, me, socket] = useContext(MyContext);
    const history = useHistory()
    const onSubmit = async (values:IJoinFormValues) => {
        const {password,email} = values;
        try {
            me.login(email, password)
            history.push(ROUTES.CHAT_ROUTE)
        }
       catch (e) {
           console.log(e)
           history.push(ROUTES.JOIN_ROUTE)
       }
    }

    return (
        <BasicJoinForm onSubmit={onSubmit}
                       submitButtonText={<FormattedMessage id={'button.sign.in'}/>}
                       title={(
            <div className={styles.title}>
                <FormattedMessage id={'button.sign.in'}/>
            </div>
        )}>

        </BasicJoinForm>
    );
};

