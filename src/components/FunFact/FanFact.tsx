import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import MeStore from "../../state/meStore";
import {observer} from "mobx-react-lite";
import utilityStore from "../../state/utilityStore";
import {MyContext} from "../../state/context";


interface IProps {
    text?: string;
}

export const FanFact: React.FC<IProps> = observer((props) => {
    const {children, text} = props;
    const [chat, me, socket,utility] = useContext ( MyContext );
    useEffect(()=>{
        utility.fetchWeather()
    },[])
    return (
        <>
            <div> Факт дня:</div>
            <span>{ utility.fact }</span>
        </>
    );
});