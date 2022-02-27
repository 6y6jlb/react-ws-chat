import * as React from 'react';
import {useContext, useEffect} from 'react';
import {Grid, Table, TableCell, TableRow} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStyles} from "./styles";
import {FormattedMessage} from "react-intl";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


interface IProps {
}

export const Weather: React.FC<IProps> = observer((props) => {
    const {children} = props;
    const {meStore,utilityStore} = useContext(StoreContext);
    const styles = useStyles();
    useEffect(()=>{
        utilityStore.fetchWeather({
            language:meStore.me.language,
            location:meStore.me.location});
    },[])
    return (
        <Grid container direction={"column"} classes={{root:styles.root}}>
                <Table>
                    <TableRow >
                        <TableCell padding={"checkbox"}
                            align={'left'}
                        >
                            <span>{utilityStore?.weather?.name}</span>
                        </TableCell>
                        <TableCell classes={{root:styles.iconWrapper}} padding={"checkbox"}
                            align={'right'}
                        >
                            <img className={styles.icon} src={utilityStore?.weather?.weather && utilityStore?.weather?.weather[0]?.icon}/>
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
                                Math.ceil(utilityStore?.weather?.main?.temp)
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
                                Math.ceil(utilityStore?.weather?.main?.feels_like)
                            }</strong>
                        </TableCell>
                    </TableRow>
                </Table>
        </Grid>
    );
});