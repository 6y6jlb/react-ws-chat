import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
   root: {
      marginTop:'5%',

    },
    fieldRoot:{
       position:"relative",
    },
    alert:{
        position:'absolute',
        zIndex:1,
        left:'-9999px',
        bottom:'50%',
        opacity:0,
        transition:"all 1s ease-out "
    },
    activeAlert:{
        left:'-50%',
        opacity:0.9
    }
})