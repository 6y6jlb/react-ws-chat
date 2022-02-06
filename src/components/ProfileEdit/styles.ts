import {makeStyles} from "@mui/styles";
import {title} from "../../utils/styles";


export const useStyles = makeStyles ( {
    root: {
        marginTop: '3%',
        position: 'relative',

    },
    selectWrapper:{
        maxWidth:200,
        alignContent:"center"
    },
    contentWrapper:{
        '&>*:first-child':{
            ...title,
            textTransform:"uppercase",
            paddingBottom: 20
        }
    }
} );