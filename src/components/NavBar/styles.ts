import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    root:{
        justifyContent:"space-around",
        display:"grid",
        gridTemplateRows:'1fr 5fr 1fr',
    },
    title: {
        display:"grid",
        gridTemplateRows:'1fr 1fr',
        justifyItems:"flex-end",
    },
    onlineCounter:{
        color:"grey"
    }
});