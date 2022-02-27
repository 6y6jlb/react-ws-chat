import * as React from 'react';
import {useCallback, useContext} from 'react';
import {AppBar, Button, Grid} from '@mui/material';
import {useStyles} from "./styles";
import {observer} from "mobx-react-lite";
import {Clock} from "../Clock/Clock";
import {NavLink, useLocation} from 'react-router-dom';
import {ROUTES} from "../../utils/routes";
import {Weather} from "../Weather/Weather";
import {pageSelector} from "../../utils/selectors/historySelector";
import {FormattedMessage} from 'react-intl'
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


type Props = {};
export const NavBar: React.FC<Props> = observer((props) => {
    const {meStore,chatStore} = useContext(StoreContext);
    const styles = useStyles();
    const isAuthorized = !!meStore.me.email;
    const history = useLocation()
    const {isProfilePage, isChatPage, isLoginPage, isLJoinPage} = pageSelector(history)
    const toLogout = useCallback(() => meStore.logout(), []);

    return (
        <AppBar color={"transparent"} variant={"outlined"} elevation={0} position="static">
            <Grid container item alignItems={"center"} justifyContent={'space-evenly'} paddingBottom={2}>
                {isAuthorized && <Weather/>}
                <div className={styles.title}>
                    <div><FormattedMessage id={'title.app'}/></div>
                    {isAuthorized ?
                        <>
                            <div className={styles.onlineCounter}>
                               <FormattedMessage id={'title.online_counter'}/>
                                {'\u00A0'} {chatStore.connectionCounter || 0}  {'\u00A0'}
                                <FormattedMessage id={'people'}/>
                            </div>
                            <Clock/>
                        </>
                        : !isLJoinPage && (isLoginPage
                            ? <Grid item>
                                <NavLink to={ROUTES.REGISTRATION_ROUTE}>< Button
                                    variant={'text'}> <FormattedMessage id={'button.registration'}/></Button>
                                </NavLink>
                            </Grid>
                            : <Grid item><
                                NavLink to={ROUTES.LOGIN_ROUTE}>< Button
                                variant={'text'}> <FormattedMessage id={'button.authorization'}/></Button>
                            </NavLink>
                            </Grid>
                    )}

                </div>
                {isAuthorized && (
                    <div className={styles.buttonsWrapper}>
                        <Button onClick={toLogout} variant={'outlined'}>
                             <FormattedMessage id={'button.logout'}/>
                        </Button>
                        {!isProfilePage &&
                            <Button variant={'outlined'}>
                                <NavLink to={`${ROUTES.PROFILE_ROUTE}`}>
                                     <FormattedMessage id={'button.profile'}/>
                                </NavLink>
                            </Button>}
                        {!isChatPage &&
                            <Button variant={'outlined'}>
                                <NavLink to={`${ROUTES.CHAT_ROUTE}`}>
                                     <FormattedMessage id={'button.chat'}/>
                                </NavLink>
                            </Button>}
                    </div>
                )}

            </Grid>
        </AppBar>
    );
});