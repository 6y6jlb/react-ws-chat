import * as React from 'react';
import {LegacyRef, useEffect, useRef, useState} from 'react';
import {useStyles} from './styles'
import {getTime} from "../../utils/time";


interface IProps {
 clocRef?:React.Ref<HTMLDivElement> | null
}

export const Clock: React.FC<IProps> = (props) => {
    const {children,clocRef} = props;
    const [time, setTime] = useState ( new Date () );
    const styles = useStyles();


    useEffect ( () => {
        const clearId = setTimeout ( () => setTime ( new Date () ), 5000 );
        return () => clearInterval ( clearId );
    }, [time] );

    return (
        <div ref={clocRef} className={styles.timeRoot}>
            { getTime(time)}
        </div>
    );
};