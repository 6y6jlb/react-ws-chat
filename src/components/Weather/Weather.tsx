import * as React from 'react';
import {useContext, useEffect} from "react";
import {MyContext} from "../../state/context";


interface IProps {

}



export const Weather: React.FC<IProps> = (props) => {
    const {children} = props;
    const [chat, me, socket,utility] = useContext ( MyContext );
    useEffect(()=>{
        utility.fetchWeather();
    },[])
    console.log (utility.weather);
    return (
        <div>

        </div>
    );
};