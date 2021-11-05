import * as React from 'react';
import {useContext} from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {MyContext} from "../App/reducer";
import {useStyles} from "./styles";


type Props = {};
export const NavBar: React.FC<Props> = () => {
    const [state, dispatch, socket] = useContext ( MyContext );
    const styles = useStyles()
    return (
        <AppBar color={ "transparent" } variant={"outlined"} position="static">
            <Toolbar className={styles.root} >
                <div className={styles.title}><strong>Добро пожаловать имени Шалтай Болтая</strong>
                    {/*{ socket && <span>сейчас онлайн { socket.readyState }</span> }*/}
                </div>
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