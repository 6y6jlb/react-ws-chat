import * as React from 'react';
import {AppBar, Button, Grid, Toolbar} from '@mui/material';

import { NavLink } from 'react-router-dom';
import {LOGIN_ROUTE} from "../../utils/routes";


type Props = {};
export const NavBar: React.FC<Props> = () => {

    return (
        <AppBar color={ "transparent" } variant={"outlined"} position="static">
            <Toolbar>
               {/* <Grid container>
                    { true
                        ?
                        <Button onClick={ () => {} } variant={ 'outlined' }>Logout</Button>
                        :
                        <NavLink to={ LOGIN_ROUTE }>< Button variant={ 'outlined' }>Login</Button></NavLink>
                    }
                </Grid>*/}
            </Toolbar>
        </AppBar>
    );
};