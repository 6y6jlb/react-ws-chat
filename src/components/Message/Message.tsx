import * as React from 'react';
import {useContext} from 'react';
import {Grid} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {useStyles} from "./styles";
import {MESSAGE_ENUM} from "../../stores/chatStore";
import {observer} from "mobx-react-lite";
import {timeConverter} from "../../utils/time";
import {FormattedMessage} from "react-intl";
import {StoreContext} from "../../stores/StoresProvider/StoresProvider";


type Props = {
    isMe: boolean;
    message: any;
};
export const Message: React.FC<Props> = observer((props) => {
    const {isMe, message} = props;
    const {chatStore} = useContext(StoreContext);
    const styles = useStyles();
    const onCopy = () => navigator.clipboard.writeText(message.body)
    if (message.event === MESSAGE_ENUM.CONNECTION) {
        chatStore.setConnectionCounter(message.connectionCounter);
    }
    const style = {
        backgroundColor: isMe ? '#3a64a8' : '#536f9b',
        color: isMe ? '#f6dbaa' : '#eee4cc',
        marginLeft: isMe ? 'auto' : '10%',
        marginRight: isMe ? '10%' : 0,
        paddingRight: 10

    };

    return (
        <Grid direction={"column"} container>
            {message.event === MESSAGE_ENUM.MESSAGE
                ? <div className={styles.mainBlock} style={style}>
                    <h3 className={styles.name}
                        style={
                            {
                                justifySelf: `${!isMe && 'flex-end'}`,
                                borderBottom: `2px solid ${isMe ? '#f6dbaa' : '#eee4cc'}`
                            }
                        }>
                        {message.name?.toUpperCase()}
                    </h3>
                    <span>{message.body}</span>
                    <span className={styles.date}>{timeConverter(message.date * 1000)}</span>
                    <div onClick={onCopy} style={isMe ? {right: 2} : {left: 6}
                    } title={'скопировать сообщение'} className={styles.copy}>
                        <ContentCopyIcon/>
                    </div>
                </div>
                : message.event === MESSAGE_ENUM.CONNECTION
                    ? <span className={styles.info}>
                        {message.name} {'\u00A0'}
                        <FormattedMessage id={'chat.message.join'}/>
                        </span>
                    : <span className={styles.info}>{message.name}  {'\u00A0'}
                        <FormattedMessage id={'chat.message.out'}/>
                    </span>
            }
        </Grid>
    );
});