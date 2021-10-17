// @flow
import * as React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import {LOGIN_ROUTE} from "../../utils/routes";
import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../../index";

type Props = {};
export const NavBar: React.FC<Props> = () => {
    const {auth} = useContext ( Context )
    const [user] = useAuthState ( auth )
    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar>
                <Grid container justify={"flex-end"}>
                    {user
                        ?
                        <Button onClick={()=>auth.signOut()} variant={'outlined'}>Logout</Button>
                        :
                        <NavLink to={LOGIN_ROUTE}>< Button variant={'outlined'}>Login</Button></NavLink>
                    }
                </Grid>

            </Toolbar>
        </AppBar>
    );
};