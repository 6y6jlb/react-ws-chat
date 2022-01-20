import { makeStyles } from '@mui/styles';
import {title} from "../../utils/styles";

export const useStyles = makeStyles({
    title: {
        display:"grid",
        // gridTemplateRows:'1fr 1fr',
        gridAutoRows:'auto',
        justifyItems:"center",
        minHeight:90,
        alignItems:'center',
        '&>div:first-child':{
            ...title,
            textTransform:"uppercase",
        }
    },
    onlineCounter:{
        color:"grey"
    },
    buttonsWrapper:{
        display:'grid',
        gridTemplateRows: '1fr 1fr',
        rowGap:'10px'
    },

});