import * as React from 'react';
import {useContext} from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";


type Props = {};
export const NavBar: React.FC<Props> = observer(() => {
    const [chat,socket] = useContext ( MyContext );
    const {connectionCounter} = chat;
    const styles = useStyles()
    return (
        <AppBar color={ "transparent" } variant={"outlined"} position="static">
            <Toolbar className={styles.root} >
                <div className={styles.title}>
                    <strong>Добро пожаловать имени Шалтай Болтая</strong>
                    <strong>{ connectionCounter && <span>сейчас онлайн { connectionCounter }</span> }</strong>
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
});