import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    messagesRoot: {
        maxHeight: window.innerHeight - 30
    },
    messages: {
        width: '80%',
        height: '70vh',
        backgroundColor: '#354765',
        overflowY: 'auto'
    },
    newMessageRoot: {
        position: 'relative',
        width: '80%',
        rowGap: 20,
        color: '#ffffff'
    },
    emojiRoot: {
        position: "absolute",
        zIndex: 1,
        top: 10
    },
    sendButton:{
        backgroundColor: '#354765',
        color: '#ffffff'
    },
    picker:{
        top:-350
    }
})