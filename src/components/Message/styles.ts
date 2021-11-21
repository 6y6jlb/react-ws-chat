import { makeStyles } from '@mui/styles';
import {MOBIL} from "../../utils/const";


export const useStyles = makeStyles({
    mainBlock:{
        minWidth: '40vw',
        margin: 10,
        borderRadius: '4%',
        maxWidth: '60%',
        width: 'fit-content',
        padding: 15,
        display: 'grid',
        justifyContent:'flexStart',
        rowGap: 20,
        fontFamily: 'serif',
        position:'relative'
    },
    info: {
        color:'#afbed2',
        margin:'20px 30px'
    },
    name:{
        display:'block',
        maxWidth:'max-content'
    },
    copy:{
        cursor:"pointer",
        position:"absolute",
        opacity:0.7,
        top:8

    },
    date:{
        fontSize:'0.7em'
    },
    [`@media (max-width:${MOBIL}px)`]: {
        mainBlock:{
            minWidth: '70vw',
            fontSize: '1.4em'
        },
    }
});