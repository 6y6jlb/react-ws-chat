import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {useStyles} from "./styles";
import {Message} from "../Message/Message";
import {Emoji} from "../Emoji/Emoji";
import {observer} from "mobx-react-lite";
import {IMessage} from '../../state/chatStore';
import {MyContext} from "../../state/context";
import {useFormik} from 'formik';
import MeStore from "../../state/meStore";
import {FormattedMessage} from "react-intl";


type Props = {}


export const Chat: React.FC<Props> = observer ( ((props) => {
    const [chat,me, socket] = useContext ( MyContext );
    const chatRef = useRef<HTMLDivElement> ( null );
    const styles = useStyles ();
    const sendMessage = () => {
        if (!chat.messageValue.trim ()) return;
        const message = {
            event: 'message',
            id: Date.now ().toString (),
            name: me.me.email,
            body: chat.messageValue,
        };
        socket?.send ( JSON.stringify ( message ) );
        chat.setMessageValue ( '' );
    };

    const formik = useFormik ( {
        initialValues: {
            message: 'введите сообщение',
        },
        onSubmit: (values) => sendMessage (),
    } );

    const messagesArray = chat.messages;
    const messagesLength = messagesArray.length;

    const scrollToBottom = () => {
        chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight );
    };

    useEffect ( () => {
        scrollToBottom ();
    } );

    if (chat.isLoading) return <Loader/>;
    return (
        <Container>
            <form onSubmit={ formik.handleSubmit }>
                <Grid container className={ styles.messagesRoot } alignItems={ "center" }>
                    <Grid ref={ chatRef } className={ styles.messages }>
                        { messagesLength && chat.messages.map ( (mes: IMessage) => {
                            const isMe = me.me.email === mes.name;
                            return <Message key={ mes.id } isMe={ isMe } message={ mes }/>;
                        } ) }
                    </Grid>
                </Grid>
                <Grid className={ styles.newMessageRoot } container direction={ 'row' } alignItems={ 'flex-end' }>
                    <TextField id={ 'message' } name={ 'message' } label={ 'message' } variant="filled"
                               autoComplete={ 'off' } onChange={ e => chat.setMessageValue ( e.currentTarget.value ) }
                               value={ chat.messageValue } className={ styles.textField }
                    />
                    <Emoji frameWidth={ chatRef.current?.clientWidth }/>
                    <Button type={ 'submit' } variant={ "contained" } className={styles.btn}>
                        <strong>
                        <FormattedMessage id={'button.message.send'}/>
                        </strong>
                    </Button>
                </Grid>
            </form>
        </Container>
    );
}) );