import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    mainBlock:{
        minWidth: '20vw',
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
        fontFamily: 'sans-serif',
        display:'block',maxWidth:'max-content'
    },
    copy:{
        cursor:"pointer",
        position:"absolute",
        opacity:0.7,
        top:8

    },
    date:{
        fontSize:'0.7em'
    }
});