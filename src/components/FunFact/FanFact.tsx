import * as React from 'react';
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


interface IProps {
    text?: string;
}

export const FanFact: React.FC<IProps> = observer((props) => {
    const {children, text} = props;
    const {utilityStore} = useContext(StoreContext);
    return (
        <>
            <div> Факт дня:</div>
            <span>{ utilityStore.fact }</span>
        </>
    );
});