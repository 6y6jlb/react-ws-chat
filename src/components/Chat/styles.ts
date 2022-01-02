import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
    messagesRoot: {
        maxHeight: window.innerHeight - 30
    },
    messages: {
        width: '100%',
        height: '70vh',
        backgroundColor: '#354765',
        overflowY: 'auto'
    },
    newMessageRoot: {
        position: 'relative',
        width: '100%',
        rowGap: 20,
        color: '#ffffff'
    },
    textField:{
        width:'80%'
    },
    btn:{
        "&.MuiButton-contained": {
            backgroundColor: '#3a64a8',
            border:'none',
            color: '#ffffff',
            width:'20%',
            height:56,
            '&:hover':{
                backgroundColor: '#7094d2',
                color: '#354765',
            }
        },
    }
})