import * as React from 'react';
import {useContext, useState} from 'react';
import classNames from "classnames";
import Picker, {SKIN_TONE_MEDIUM_DARK} from "emoji-picker-react";
import {Button} from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import {useStyles} from "../Chat/styles";
import {MyContext} from "../../state/context";
import {observer} from "mobx-react-lite";



interface IProps  {

}

export const Emoji: React.FC<IProps> = observer((props) => {
    const {children} = props;
    const [chat,socket] = useContext ( MyContext );
    const styles = useStyles ();
    const [isShowEmoji, setIsShowEmoji] = useState ( false );
    const showImoji = () => setIsShowEmoji ( true );
    const hideImoji = () => setIsShowEmoji ( false );
    const onEmojiClick = (event: any, emojiObject: any) => {
        chat.setMessageValue ( emojiObject.emoji ) ;
    };

    return (
        <div className={ classNames ( styles.emojiRoot, {[styles.picker]: isShowEmoji} ) }
             onBlur={ hideImoji }>
            { isShowEmoji
                ? <Picker native groupNames={ {smileys_people: "PEOPLE"} } disableAutoFocus={ true }
                          onEmojiClick={ onEmojiClick } skinTone={ SKIN_TONE_MEDIUM_DARK }/>
                : <Button onClick={ showImoji }><EmojiEmotionsIcon/></Button> }
        </div>
    );
});