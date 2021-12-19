import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles ( {
    root: {
        marginTop: '5%',
        position: 'relative',

    },
    alert: {
        position: "absolute",
        width: 300,
        right:'25%',
        opacity:0.7,
        zIndex: 0,
        top:'5%',

    },
} );