import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root:{
        justifyContent:"space-between",
        display:"grid",
        columnGap:30,
        flexWrap:'wrap',
        rowGap:4,
        margin:'8px 0',
        gridTemplateColumns:'1fr 1fr 1fr',
        justifyItems:'center',
    },
    empty:{
    maxWidth:'30vw'
    },
    title: {
        display:"grid",
        gridTemplateRows:'1fr 1fr',
        justifyItems:"flex-end",

    },
    onlineCounter:{
        color:"grey"
    },
});