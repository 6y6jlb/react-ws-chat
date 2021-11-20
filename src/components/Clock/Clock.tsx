import * as React from 'react';
import {useEffect, useState} from 'react';
import {useStyles} from './styles'
import {getTime} from "../../utils/time";


interface IProps {

}

export const Clock: React.FC<IProps> = (props) => {
    const {children} = props;
    const [time, setTime] = useState ( new Date () );
    const styles = useStyles()

    useEffect ( () => {
        const clearId = setTimeout ( () => setTime ( new Date () ), 5000 );
        return () => clearInterval ( clearId );
    }, [time] );

    return (
        <div className={styles.timeRoot}>
            { getTime(time)}
        </div>
    );
};