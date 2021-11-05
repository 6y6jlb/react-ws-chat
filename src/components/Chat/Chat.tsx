import * as React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {useStyles} from "./styles";
import {Message} from "../Message/Message";
import {Emoji} from "../Emoji/Emoji";
import {observer} from "mobx-react-lite";
import { IMessage } from '../../state/chatStore';
import {MyContext} from "../../state/context";


type Props = {}
export const Chat: React.FC<Props> = observer((props) => {
    const {} = props
    const [chat,socket] = useContext ( MyContext );
    const chatRef = useRef<HTMLDivElement> ( null );
    const styles = useStyles ();



    const scrollToBottom = () => {
        chatRef.current?.scrollIntoView ( {behavior: "smooth"} );
    };

    useEffect ( () => {
        scrollToBottom ();
    }, [chat] );

    const sendMessage = () => {
        const message = {
            event: 'message',
            id: Date.now ().toString (),
            name: chat.me.name,
            body: chat.messageValue,
        };

        socket?.send ( JSON.stringify ( message ) );
        chat.setMessageValue ( '' ) ;
        chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight );
    };
    if (chat.isLoading) return <Loader/>;
    return (
        <Container>
            <Grid container className={ styles.messagesRoot } alignItems={ "center" }>
                <div className={ styles.messages }>
                    { chat.messages.length && chat.messages.map ( (mes: IMessage) => {
                        const isMe = chat.nameValue === mes.name;
                        return <Message ref={ chatRef } isMe={ isMe } message={ mes }/>;
                    } ) }

                </div>
                <div ref={chatRef}/>
                <Grid className={ styles.newMessageRoot } container direction={ 'column' } alignItems={ 'flex-end' }>
                    <TextField variant="filled" onChange={ e => chat.setMessageValue ( e.currentTarget.value )  }
                               value={ chat.messageValue } fullWidth
                    />
                    <Emoji/>
                    <Button className={ styles.sendButton } onClick={ sendMessage }
                            variant={ 'outlined' }>send</Button>

                </Grid>
            </Grid>
        </Container>
    );
});