import * as React from 'react';
import {useState} from 'react';
import {NavBar} from "../NavBar/NavBar";
import AppRoute from "./AppRoute/AppRoute";
import './App.css';
import {Loader} from "../Loader/Loader";
import {HashRouter} from 'react-router-dom';
import {Button, Grid, TextField} from "@mui/material";
import ChatStore, {MESSAGE_ENUM} from "../../state/chatStore";
import {observer} from "mobx-react-lite";
import {MyContext} from '../../state/context';
import {useFormik} from "formik";


const App: React.FC = observer(() => {
    const [chat] = useState(() => new ChatStore())
    const setName = () => chat.setMe({id: Date.now().toString(), name: chat.nameValue})
    const [socket, setSocket] = useState<WebSocket | null>(null)
    const value = React.useMemo(() => [chat, socket], [chat, socket])

    const connect = async () => {
        setName()
        chat.setLoading(true);
        setSocket(await new WebSocket('wss://ws-simple-chat-api.herokuapp.com'));
    };

    const formik = useFormik({
        initialValues: {
            name: 'введите ваше имя',
        },
        onSubmit: (values) => connect(),
    });


    if (socket) {
        socket.onmessage = (messageEvent: MessageEvent) => {
            chat.setMessages(JSON.parse(messageEvent.data))
        }
        socket.onopen = () => {
            chat.setConnected(true);
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: chat.me.id,
                name: chat.nameValue,
                body: '',
            };
            socket?.send(JSON.stringify(message));
            chat.setLoading(false);
        };
        socket.onmessage = (event: MessageEvent) => {
            const messages = JSON.parse(event.data);
            chat.setMessages(messages);
        };
        socket.onclose = () => {
            chat.setConnected(false);
            const message = {
                event: MESSAGE_ENUM.CONNECTION,
                id: chat.me.id,
                name: chat.nameValue,
                body: '',
            };
            socket.send(JSON.stringify(message));
        };
        socket.onerror = () => {
            chat.setConnected(false);
            setTimeout(() => connect(), 1000);
        };
    }

    if (chat.isLoading) return <Loader/>;
    const onChatDisabler = chat.nameValue?.trim().length < 3;


    return (
        <HashRouter>
            <MyContext.Provider value={value}>
                <NavBar/>
                {!chat.isConnected ?
                    <form onSubmit={formik.handleSubmit}>
                        <Grid container justifyContent={"center"} alignItems={"stretch"}>
                                <TextField variant="filled"
                                           onChange={e => chat.setNameValue(e.currentTarget.value)}
                                           value={chat.nameValue}
                                           id="name" name="name" label="name"
                                />
                                <Button type="submit" disabled={onChatDisabler} color={'info'}
                                        variant={'contained'}>connect</Button>
                        </Grid>
                    </form>
                    :
                    <AppRoute/>
                }
            </MyContext.Provider>
        </HashRouter>
    );
});

export default App;

