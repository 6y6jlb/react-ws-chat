import * as React from 'react';
import {useEffect, useReducer, useState} from 'react';
import {NavBar} from "../NavBar/NavBar";
import AppRoute from "./AppRoute/AppRoute";
import './App.css';
import {Loader} from "../Loader/Loader";
import {
    initialState,
    MESSAGE_ENUM,
    reducer,
    setConnected,
    setLoading,
    setMe,
    setMessages,
    setNameValue,
} from "./reducer";
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Button, Grid, TextField} from "@mui/material";
import {MyContext} from './reducer'




const App: React.FC = () => {
    const [state, dispatch] = useReducer ( reducer, initialState );
    const setName = () => dispatch(setMe({id:Date.now().toString(),name:state.nameValue}))
    const [socket,setSocket] = useState<WebSocket | null>(null)
    const value = React.useMemo(() => [state, dispatch, socket], [state,socket])

    const connect = async () => {
        setName()
        dispatch ( setLoading ( true ) );
        setSocket(await new WebSocket ( 'wss://ws-simple-chat-api.herokuapp.com' ));
    };

    if (socket) {
        socket.onmessage = (messageEvent:MessageEvent) => {
            dispatch ( setMessages (  JSON.parse ( messageEvent.data  )))
        }
        socket.onopen = () => {
            dispatch ( setConnected ( true ) );
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: state.me.id,
                name: state.nameValue,
                body: '',
            };
            socket?.send ( JSON.stringify ( message ) );
            dispatch ( setLoading ( false ) );
        };
        socket.onmessage = (event: MessageEvent) => {
            const messages = JSON.parse ( event.data );
            dispatch ( setMessages ( messages ) );

        };
        socket.onclose = () => {
            dispatch ( setConnected ( false ) );
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: state.me.id,
                name: state.nameValue,
                body: '',
            };
            socket.send( JSON.stringify ( message ) );
        };
        socket.onerror = () => {
            dispatch ( setConnected ( false ) );
            setTimeout ( () => connect (), 1000 );
        };
    }

    if (state.isLoading) return <Loader/>;
    const onChatDisabler = state.nameValue?.trim ().length < 3;



    return (
        <HashRouter>
            <MyContext.Provider value={value}>
                <NavBar/>
                { !state.isConnected ?
                    <>
                        <Grid container justifyContent={ "center" } alignItems={ "stretch" }>
                            <TextField variant="filled"
                                       onChange={ e => dispatch ( setNameValue (  e.currentTarget.value) ) }
                                       value={ state.nameValue }
                            />
                            <Button disabled={ onChatDisabler } color={ 'info' } onClick={ connect }
                                    variant={ 'contained' }>connect</Button>
                        </Grid>
                    </>
                    :
                    <AppRoute/>
                }
            </MyContext.Provider>
        </HashRouter>
    );
};

export default App;

