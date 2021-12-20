import * as React from 'react';
import {useCallback, useContext, useRef} from 'react';
import {AppBar, Button, Grid} from '@mui/material';
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";
import {Clock} from "../Clock/Clock";
import {NavLink, useLocation} from 'react-router-dom';
import {ROUTES} from "../../utils/routes";


type Props = {};
export const NavBar: React.FC<Props> = observer ( (props) => {
    const [chat, me, socket] = useContext ( MyContext );
    const {connectionCounter} = chat;
    const styles = useStyles ();
    const clockRef = useRef<HTMLDivElement> ( null );
    const isAuthorized = !!me.me.email;
    const isLoginPage = useLocation ().pathname.includes ( ROUTES.LOGIN_ROUTE );
    const isLJoinPage = useLocation ().pathname.includes ( ROUTES.JOIN_ROUTE );
    const emptyBoxWidth = clockRef?.current?.offsetWidth || 0;
    const onLogout = useCallback ( () => me.logout (), [] );
    return (
        <AppBar color={ "transparent" } variant={ "outlined" } elevation={ 0 } position="static">
            <Grid container item alignItems={ "center" } justifyContent={ 'space-evenly' }>
                <div style={ {width: emptyBoxWidth || '11vw'} }/>
                <div className={ styles.title }>
                    <div>{ 'Чат имени Альфредо Гарсии' }</div>
                    { isAuthorized ?
                        <span className={ styles.onlineCounter }>
                                сейчас онлайн: { connectionCounter || 0 } человек
                            </span>
                        : !isLJoinPage && (isLoginPage
                            ? <Grid item><NavLink to={ ROUTES.REGISTRATION_ROUTE }>< Button
                                variant={ 'text' }>к регистрации</Button></NavLink></Grid>
                            : <Grid item><NavLink to={ ROUTES.LOGIN_ROUTE }>< Button
                                variant={ 'text' }>к логину</Button></NavLink>
                            </Grid>
                    ) }

                </div>
                <Clock clocRef={ clockRef }/>
                { isAuthorized && <Button onClick={ onLogout } variant={ 'outlined' }>Logout</Button> }
            </Grid>
        </AppBar>
    );
} );