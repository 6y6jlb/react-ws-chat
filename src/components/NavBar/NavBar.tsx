import * as React from 'react';
import {useContext} from 'react';
import {AppBar, Toolbar} from '@mui/material';
import {useStyles} from "./styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";
import {Clock} from "../Clock/Clock";



type Props = {};
export const NavBar: React.FC<Props> = observer(() => {
    const [chat,socket] = useContext ( MyContext );
    const {connectionCounter} = chat;
    const styles = useStyles()
    return (
        <AppBar color={ "transparent" } variant={"outlined"} elevation={0} position="static">
            <Toolbar className={styles.root} >
                <div/>
                <div className={styles.title}>
                    <strong>{'Живые и прочие'.toUpperCase()}</strong>
                    <span className={styles.onlineCounter}>сейчас онлайн: { connectionCounter || 0 } человек </span>
                </div>
                <Clock/>
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