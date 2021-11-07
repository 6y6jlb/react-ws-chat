import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles({
    root:{
        justifyContent:"center"
    },
    title: {
        display:"grid",
        gridTemplateRows:'1fr 1fr',
        justifyItems:"flex-end",
        '&:last-child span':{
            color:'grey'
        }
    },
});