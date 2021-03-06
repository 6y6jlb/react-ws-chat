import {makeStyles} from '@mui/styles';
import {title} from "../../utils/styles";


export const useStyles = makeStyles({
    children:{
       display:"grid",
        gridTemplateColumns:'1fr 24px',
        columnGap:6,
        cursor:"pointer"
    },
    title:{
        ...title,
        textTransform:"uppercase",
    }

});