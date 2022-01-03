import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles ( {
    root: {
        marginTop: '5%',
        position: 'relative',

    },
    selectWrapper:{
        maxWidth:100,
        alignContent:"center"
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