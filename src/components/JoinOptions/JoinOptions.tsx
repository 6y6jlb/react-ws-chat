import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import {ROUTES} from "../../utils/routes";
import * as React from "react";
import {useStyles} from "./styles";
import {FormattedMessage} from "react-intl";

export const JoinOptions: React.FC = () => {
    const styles = useStyles();
    return (
        <Grid className={styles.root} container justifyContent={"center"} direction={"column"} alignItems={"center"}
              gap={10}>
            {/*<FanFact text={'test'}/>*/}
            <Grid item><NavLink to={ROUTES.REGISTRATION_ROUTE}>< Button size={'large'}
                variant={'contained'} classes={{root: styles.btn}}>
                <FormattedMessage id={'button.sign.up'}/>
            </Button>
            </NavLink></Grid>
            <Grid item><NavLink to={ROUTES.LOGIN_ROUTE}>< Button size={'large'}
                variant={'contained'} classes={{root: styles.btn}}>
                <FormattedMessage id={'button.sign.in'}/>
            </Button>
            </NavLink></Grid>
        </Grid>
    )
}