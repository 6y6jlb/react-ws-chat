import * as React from 'react';
import {useContext, useEffect, useRef} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {IMessage, MESSAGE_ENUM, MyContext, setMessageValue} from "../App/reducer";
import {useStyles} from "./styles";

type Props = {}
export const Chat: React.FC<Props> = (props) => {
    const [state, dispatch, socket] = useContext ( MyContext );
    const chatRef = useRef<HTMLDivElement> ( null )
    const styles = useStyles()


    const scrollToBottom = () => {
        chatRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [state]);

    const sendMessage = () => {
        const message = {
            event: 'message',
            id: Date.now ().toString (),
            name: state.me.name,
            body: state.messageValue,
        };

        socket?.send ( JSON.stringify ( message ) );
        dispatch ( setMessageValue ( '' ) );
        chatRef.current?.scrollTo ( 0, chatRef.current.scrollHeight )
    };
    if (state.isLoading) return <Loader/>;

    return (
        <Container>
            <Grid container alignItems={ "center" } style={ {maxHeight: window.innerHeight - 30} }>
                <div style={ {width: '80%', height: '70vh', backgroundColor: '#354765', overflowY: 'auto'} }>
                    { state.messages.length && state.messages.map ( (mes: IMessage) => {
                        const isMe = state.nameValue === mes.name
                        const style = {
                            minWidth:'20vw',
                            margin: 10,
                            backgroundColor: isMe ? '#3a64a8' : '#224e94',
                            color: '#ffffff',
                            borderRadius: '4%',
                            marginLeft: isMe ? 'auto' : '10%',
                            marginRight: isMe ? '10%' : 0,
                            maxWidth: '40%',
                            width: 'fit-content',
                            padding: 15,
                            display:'grid',
                            rowGap:20,
                            fontFamily:'serif',
                            '&:first-child':{
                                fontFamily:'sans-serif',
                            }
                        };
                        return (
                            <Grid key={mes.id} direction={ "column" } container>
                                { mes.event === MESSAGE_ENUM.MESSAGE
                                    ? <div style={style}><h3>{ mes.name }</h3>
                                        <span >{ mes.body }</span></div>
                                    :mes.event === MESSAGE_ENUM.CONNECTION ? <span className={styles.info}>{ mes.name } подключился к чату.. .</span>
                                : <span  className={styles.info}>{ mes.name } вышел из чата.. .</span>}
                                <div ref={ chatRef }/>
                            </Grid>
                        );
                    } ) }

                </div>
                <Grid container direction={ 'column' } alignItems={ 'flex-end' }
                      style={ {width: '80%', rowGap: 20, color: '#ffffff'} }>
                    <TextField variant="filled" onChange={ e => dispatch ( setMessageValue ( e.currentTarget.value ) ) }
                               value={ state.messageValue } fullWidth
                    />
                    <Button style={ {backgroundColor: '#354765', color: '#ffffff'} } onClick={ sendMessage }
                            variant={ 'outlined' }>send</Button>

                </Grid>
            </Grid>
        </Container>
    );
};