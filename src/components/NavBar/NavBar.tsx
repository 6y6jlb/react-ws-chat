import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import {AppBar, Button, Grid, Toolbar} from '@mui/material';
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";
import {Clock} from "../Clock/Clock";
import {NavLink, useHistory, useLocation} from 'react-router-dom';
import {ROUTES} from "../../utils/routes";


type Props = {};
export const NavBar: React.FC<Props> = observer ( (props) => {
    const [chat, me, socket] = useContext ( MyContext );
    const {connectionCounter} = chat;
    const styles = useStyles ();
    const isAuthorized = false;
    const isLoginPage = useLocation().pathname.includes(ROUTES.LOGIN_ROUTE)

    return (
        <AppBar color={ "transparent" } variant={ "outlined" } elevation={ 0 } position="static">
            <Toolbar className={ styles.root }>
                <div/>
                <div className={ styles.title }>
                    <strong>{ 'Чат имени Альфредо Гарсии'.toUpperCase () }</strong>
                    { isAuthorized ? <span
                            className={ styles.onlineCounter }> сейчас онлайн: { connectionCounter || 0 } человек </span>
                        : isLoginPage ? <Grid item><NavLink to={ ROUTES.REGISTRATION_ROUTE }>< Button
                                variant={ 'text' }>к регистрации</Button></NavLink></Grid>
                            : <Grid item><NavLink to={ ROUTES.LOGIN_ROUTE }>< Button
                                variant={ 'text' }>к логину</Button></NavLink></Grid>
                    }
                </div>
                <Clock/>
                <Grid container>
                    { isAuthorized && <Button onClick={ () => {
                    } } variant={ 'outlined' }>Logout</Button> }
                </Grid>
            </Toolbar>
        </AppBar>
    );
} );