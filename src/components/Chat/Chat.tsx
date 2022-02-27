import * as React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {useStyles} from "./styles";
import {Message} from "../Message/Message";
import {Emoji} from "../Emoji/Emoji";
import {observer} from "mobx-react-lite";
import {IMessage} from '../../stores/chatStore';
import {useFormik} from 'formik';
import {FormattedMessage} from "react-intl";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";
import {toJS} from "mobx";


type Props = {}


export const Chat: React.FC<Props> = observer ( ((props) => {
    const {chatStore,meStore,wsStore} = useContext ( StoreContext );
    const chatRef = useRef<HTMLDivElement> ( null );
    const styles = useStyles ();
    const sendMessage = () => {
        if (!chatStore.messageValue.trim ()) return;
        const message = {
            event: 'message',
            id: Date.now ().toString (),
            name: meStore.me.email,
            body: chatStore.messageValue,
        };
        wsStore.socket?.send ( JSON.stringify ( message ) );
        chatStore.setMessageValue ( '' );
    };

    const formik = useFormik ( {
        initialValues: {
            message: 'введите сообщение',
        },
        onSubmit: (values) => sendMessage (),
    } );

    const messagesArray = chatStore.messages;
    const messagesLength = messagesArray.length;

    const scrollToBottom = () => {
        chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight );
    };

    useEffect ( () => {
        scrollToBottom ();
    } );
    if (chatStore.isLoading) return <Loader/>;
    return (
        <Container>
            <form onSubmit={ formik.handleSubmit }>
                <Grid container className={ styles.messagesRoot } alignItems={ "center" }>
                    <Grid ref={ chatRef } className={ styles.messages }>
                        { messagesLength && chatStore.messages.map ( (mes: IMessage) => {
                            const isMe = meStore.me.email === mes.name;
                            return <Message key={ mes.id } isMe={ isMe } message={ mes }/>;
                        } ) }
                    </Grid>
                </Grid>
                <Grid className={ styles.newMessageRoot } container direction={ 'row' } alignItems={ 'flex-end' }>
                    <TextField id={ 'message' } name={ 'message' } label={ <FormattedMessage id={'message.label'}/> } variant="filled"
                               autoComplete={ 'off' } onChange={ e => chatStore.setMessageValue ( e.currentTarget.value ) }
                               value={ chatStore.messageValue } className={ styles.textField }
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