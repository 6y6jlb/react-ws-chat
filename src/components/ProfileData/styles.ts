import {makeStyles} from '@mui/styles';
import {title} from "../../utils/styles";


export const useStyles = makeStyles({
    profileDataRoot:{
        margin:'5vh auto',
        '&>*:last-child':{
            marginTop:20
        }
    },
    tableRoot:{
        maxWidth: '500px'
    },
    test:{
        borderRadius:'6px',
        minWidth:'100px'
    }

});