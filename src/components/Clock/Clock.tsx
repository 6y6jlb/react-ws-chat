import * as React from 'react';
import {LegacyRef, useEffect, useRef, useState} from 'react';
import {useStyles} from './styles'
import {getTime} from "../../utils/time";


interface IProps {
}

export const Clock: React.FC<IProps> = (props) => {
    const {children} = props;
    const [time, setTime] = useState ( new Date () );
    const styles = useStyles();


    useEffect ( () => {
        const clearId = setTimeout ( () => setTime ( new Date () ), 1000 );
        return () => clearTimeout ( clearId );
    }, [time] );

    return (
        <div className={styles.timeRoot}>
            { getTime(time)}
        </div>
    );
};