import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root:{
        justifyContent:"space-around",
        display:"flex",
        columnGap:30,
        flexWrap:'wrap',
        rowGap:4,
        margin:'8px 0'
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