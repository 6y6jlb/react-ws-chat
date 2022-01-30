import * as React from 'react';
import {useContext, useEffect} from 'react';
import {MyContext} from "../../state/context";
import {Grid, Table, TableCell, TableRow} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStyles} from "./styles";
import {FormattedMessage} from "react-intl";


interface IProps {
}

export const Weather: React.FC<IProps> = observer((props) => {
    const {children} = props;
    const [chat, me, socket,utility] = useContext ( MyContext );
    const styles = useStyles();
    useEffect(()=>{
        utility.fetchWeather({
            language:me.me.language,
            location:me.me.location});
    },[])
    return (
        <Grid container direction={"column"} classes={{root:styles.root}}>
                <Table>
                    <TableRow >
                        <TableCell padding={"checkbox"}
                            align={'left'}
                        >
                            <span>{utility?.weather?.name}</span>
                        </TableCell>
                        <TableCell classes={{root:styles.iconWrapper}} padding={"checkbox"}
                            align={'right'}
                        >
                            <img className={styles.icon} src={utility?.weather?.weather?.icon}/>
                        </TableCell>
                </TableRow>
                    <TableRow>
                        <TableCell padding={"checkbox"}
                            align={'left'}
                        >
                            <span>
                                 <FormattedMessage id={'weather.degree.current'}/>
                            </span>
                        </TableCell>
                        <TableCell padding={"checkbox"}
                            align={'right'}
                        >
                            <strong>{
                                Math.ceil(utility?.weather?.main?.temp)
                            }</strong>
                        </TableCell>
                </TableRow>
                    <TableRow>
                        <TableCell padding={"checkbox"}
                            align={'left'}
                        >
                            <span>
                                 <FormattedMessage id={'weather.degree.feel'}/>
                            </span>
                        </TableCell>
                        <TableCell padding={"checkbox"}
                            align={'right'}
                        >
                            <strong>{
                                Math.ceil(utility?.weather?.main?.feels_like)
                            }</strong>
                        </TableCell>
                    </TableRow>
                </Table>
        </Grid>
    );
});