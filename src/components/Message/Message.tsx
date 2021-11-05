import * as React from 'react';
import {Grid} from "@mui/material";
import {MESSAGE_ENUM} from "../App/reducer";
import {useStyles} from "./styles";


type Props = {
    isMe: boolean;
    message: any;
    ref: any
};
export const Message: React.FC<Props> = (props) => {
    const {isMe, message, ref} = props;
    const styles = useStyles ();
    const style = {
        minWidth: '20vw',
        margin: 10,
        backgroundColor: isMe ? '#3a64a8' : '#224e94',
        color: '#ffffff',
        borderRadius: '4%',
        marginLeft: isMe ? 'auto' : '10%',
        marginRight: isMe ? '10%' : 0,
        maxWidth: '40%',
        width: 'fit-content',
        padding: 15,
        display: 'grid',
        rowGap: 20,
        fontFamily: 'serif',
        '&:firstChild': {
            fontFamily: 'sans-serif',
        },
    };
    return (
        <Grid key={ message.id } direction={ "column" } container>
            { message.event === MESSAGE_ENUM.MESSAGE
                ? <div style={ style }><h3>{ message.name }</h3>
                    <span>{ message.body }</span></div>
                : message.event === MESSAGE_ENUM.CONNECTION ?
                    <span className={ styles.info }>{ message.name } подключился к чату.. .</span>
                    : <span className={ styles.info }>{ message.name } вышел из чата.. .</span> }
            <div ref={ ref }/>
        </Grid>
    );
};