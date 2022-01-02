import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import * as React from "react";
import {useStyles} from "./styles";

export const JoinOptions: React.FC = () => {
    const styles = useStyles();
    return (
        <Grid className={styles.root} container justifyContent={"center"} direction={"column"} alignItems={"center"}
              gap={10}>
            {/*<FanFact text={'test'}/>*/}
            <Grid item><NavLink to={ROUTES.REGISTRATION_ROUTE}>< Button size={'large'}
                variant={'contained'} classes={{root: styles.btn}}>Регистрация</Button>
            </NavLink></Grid>
            <Grid item><NavLink to={ROUTES.LOGIN_ROUTE}>< Button size={'large'}
                variant={'contained'} classes={{root: styles.btn}}>Вход</Button>
            </NavLink></Grid>
        </Grid>
    )
}