import { makeStyles } from '@mui/styles';
import {title} from "../../utils/styles";

export const useStyles = makeStyles({
    title: {
        display:"grid",
        gridTemplateRows:'1fr 1fr',
        justifyItems:"center",
        '&>div:first-child':{
            ...title,
            textTransform:"uppercase",
        }

    },
    onlineCounter:{
        color:"grey"
    },
});