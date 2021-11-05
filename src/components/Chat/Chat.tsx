import * as React from 'react';
import {useContext, useEffect, useRef, useState} from 'react';
import {Button, Container, Grid, TextField} from '@mui/material';
import {Loader} from "../Loader/Loader";
import {IMessage, MyContext, setMessageValue} from "../App/reducer";
import {useStyles} from "./styles";
import {Message} from "../Message/Message";
import Picker, {SKIN_TONE_MEDIUM_DARK} from 'emoji-picker-react';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import classNames from "classnames";


type Props = {}
export const Chat: React.FC<Props> = (props) => {
    const [state, dispatch, socket] = useContext(MyContext);
    const chatRef = useRef<HTMLDivElement>(null)
    const styles = useStyles()
    const [chosenEmoji, setChosenEmoji] = useState<any>(null);
    const [isShowEmoji, setIsShowEmoji] = useState(false);
    const showImoji = () => setIsShowEmoji(true)
    const hideImoji = () => setIsShowEmoji(false)
    const onEmojiClick = (event: any, emojiObject: any) => {
        setChosenEmoji(emojiObject);
    };


    const scrollToBottom = () => {
        chatRef.current?.scrollIntoView({behavior: "smooth"})
    }

    useEffect(() => {
        scrollToBottom()
    }, [state]);

    const sendMessage = () => {
        const message = {
            event: 'message',
            id: Date.now().toString(),
            name: state.me.name,
            body: state.messageValue,
        };

        socket?.send(JSON.stringify(message));
        dispatch(setMessageValue(''));
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight)
    };
    if (state.isLoading) return <Loader/>;
    return (
        <Container>
            <Grid container className={styles.messagesRoot} alignItems={"center"}>
                {chosenEmoji && <span>{chosenEmoji.emoji}</span>}
                <div className={styles.messages}>
                    {state.messages.length && state.messages.map((mes: IMessage) => {
                        const isMe = state.nameValue === mes.name
                        return <Message ref={chatRef} isMe={isMe} message={mes}/>
                    })}

                </div>
                <Grid className={styles.newMessageRoot} container direction={'column'} alignItems={'flex-end'}>
                    <TextField variant="filled" onChange={e => dispatch(setMessageValue(e.currentTarget.value))}
                               value={state.messageValue} fullWidth
                    />
                    <div className={classNames(styles.emojiRoot,{[styles.picker]:isShowEmoji})} onBlur={hideImoji}>
                        {isShowEmoji
                            ? <Picker onEmojiClick={onEmojiClick} skinTone={SKIN_TONE_MEDIUM_DARK}/>
                            : <Button onClick={showImoji}><EmojiEmotionsIcon/></Button>}
                    </div>
                    <Button className={styles.sendButton} onClick={sendMessage}
                            variant={'outlined'}>send</Button>

                </Grid>
            </Grid>
        </Container>
    );
};