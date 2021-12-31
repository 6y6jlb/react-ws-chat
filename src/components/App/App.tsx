import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavBar} from "../NavBar/NavBar";
import './App.css';
import {Loader} from "../Loader/Loader";
import {HashRouter} from 'react-router-dom';
import ChatStore, {MESSAGE_ENUM} from "../../state/chatStore";
import {observer} from "mobx-react-lite";
import {MyContext} from '../../state/context';
import MeStore from "../../state/meStore";
import {Chat} from "../Chat/Chat";
import AppRoute from "../AppRoute/AppRoute";
import utilityStore from "../../state/utilityStore";


const App: React.FC = observer ( (props) => {
    const [chat] = useState ( () => new ChatStore () );
    const [me] = useState ( () => new MeStore () );
    const [utility] = useState ( () => new utilityStore () );
    const [socket, setSocket] = useState<WebSocket | null> ( null );
    const value = React.useMemo ( () => [chat, me, socket, utility], [chat, me, socket, utility] );


    const connect = async () => {
        chat.setLoading ( true );
        setSocket ( await new WebSocket ( 'wss://ws-simple-chat-api.herokuapp.com' ) );
        // setSocket ( await new WebSocket ( 'ws://localhost:5000' ) );
    };

    const isAuthorized = !!me.me.email;

    useEffect ( () => {
        if (localStorage.getItem ( 'token' )) {
            me.refresh ();
        }
    }, [] );

    useEffect ( () => {
        if (!socket && isAuthorized) {
            connect ();
        }
    }, [isAuthorized] );

    if (socket) {
        socket.onmessage = (messageEvent: MessageEvent) => {
            chat.setMessages ( JSON.parse ( messageEvent.data ) );
        };
        socket.onopen = () => {
            chat.setConnected ( true );
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: me.me.id,
                name: me.me.email,
                body: me.me.email,
            };
            socket?.send ( JSON.stringify ( message ) );
            chat.setLoading ( false );
        };
        socket.onmessage = (event: MessageEvent) => {
            const messages = JSON.parse ( event.data );
            chat.setMessages ( messages );
        };
        socket.onclose = () => {
            chat.setConnected ( false );
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: me.me.id,
                name: me.me.email,
                body: '',
            };
            socket.send ( JSON.stringify ( message ) );
        };
        socket.onerror = () => {
            chat.setConnected ( false );
            setTimeout ( () => connect (), 1000 );
        };
    }
    if (chat.isLoading) return <Loader/>;


    return (
        <HashRouter>
            <MyContext.Provider value={ value }>
                <NavBar/>
                { isAuthorized ?
                    <Chat/>
                    : <AppRoute/>
                }
            </MyContext.Provider>
        </HashRouter>
    );
} );

export default App;

