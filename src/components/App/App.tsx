import * as React from 'react';
import {useReducer} from 'react';
import {NavBar} from "../NavBar/NavBar";
import AppRoute from "./AppRoute/AppRoute";
import './App.css';
import {Loader} from "../Loader/Loader";
import {initialState, reducer, setConnected, setLoading, setMe, setMessages, setNameValue} from "./reducer";
import {BrowserRouter} from 'react-router-dom';
import {Button, Grid, TextField} from "@mui/material";


const App: React.FC = () => {
    const [state, dispatch] = useReducer ( reducer, initialState );

    const setName = () => dispatch(setMe({id:Date.now().toString(),name:state.nameValue}))

    const connect = async () => {
        await setName()
        dispatch ( setLoading ( true ) );
        state.socket = await new WebSocket ( 'ws://localhost:5000' );
        state.socket.onopen = () => {
            dispatch ( setConnected ( true ) );
            const message = {
                event: 'connection',
                id: state.me.id,
                name: state.nameValue,
                body: '',
            };
            state.socket?.send ( JSON.stringify ( message ) );
            dispatch ( setLoading ( false ) );
            console.log ( 'ws on' );
        };
        state.socket.onmessage = (event: MessageEvent) => {
            console.log ( JSON.parse(event.data) );
            const messages = JSON.parse ( event.data );
            dispatch ( setMessages ( messages ) );
            console.log ( 'message send' );

        };
        state.socket.onclose = () => {
            dispatch ( setConnected ( false ) );
            console.log ( 'ws close' );
        };
        state.socket.onerror = () => {
            dispatch ( setConnected ( false ) );
            setTimeout ( () => connect (), 1000 );
            console.log ( 'ws error' );
        };
    };
    if (state.isLoading) return <Loader/>;
    const onChatDisabler = state.nameValue?.trim ().length < 3;

    return (
        <BrowserRouter>
            <>
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

            </>
        </BrowserRouter>
    );
};

export default App;

