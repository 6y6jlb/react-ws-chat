import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles ( {
    root: {
        marginTop: '5%',
        position: 'relative',

    },
    selectWrapper:{
        maxWidth:200,
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
    fieldWrapper:{
        position:'relative'
    },
    validatorMessage:{
        position: "absolute",
        top:0,
        right:'-124px',
        width:120
    }
} );