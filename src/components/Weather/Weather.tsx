import * as React from 'react';
import {useContext, useEffect} from 'react';
import {MyContext} from "../../state/context";
import {Grid, Table, TableCell, TableRow} from "@mui/material";
import {observer} from "mobx-react-lite";
import {useStyles} from "./styles";


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
                            <span>температура воздуха </span>
                        </TableCell>
                        <TableCell padding={"checkbox"}
                            align={'right'}
                        >
                            <strong>{
                                //273.15 kelvin
                                //need to add &units=metric
                                Math.ceil(utility?.weather?.main?.temp - 273.15)
                            }</strong>
                        </TableCell>
                </TableRow>
                    <TableRow>
                        <TableCell padding={"checkbox"}
                            align={'left'}
                        >
                            <span> ощущается как </span>
                        </TableCell>
                        <TableCell padding={"checkbox"}
                            align={'right'}
                        >
                            <strong>{
                                //273.15 kelvin
                                //need to add &units=metric
                                Math.ceil(utility?.weather?.main?.feels_like - 273.15)
                            }</strong>
                        </TableCell>
                    </TableRow>
                </Table>
                {/*<div><span>температура воздуха </span>*/}
                {/*    <strong>{*/}
                {/*        //273.15 kelvin*/}
                {/*        //need to add &units=metric*/}
                {/*        Math.ceil(utility?.weather?.main?.temp - 273.15)*/}
                {/*    }</strong>*/}
                {/*</div>*/}
                {/*<div><span> ощущается как </span>*/}
                {/*    <strong>{*/}
                {/*        //273.15 kelvin*/}
                {/*        //need to add &units=metric*/}
                {/*        Math.ceil(utility?.weather?.main?.feels_like - 273.15)*/}
                {/*    }</strong>*/}
                {/*</div>*/}
        </Grid>
    );
});