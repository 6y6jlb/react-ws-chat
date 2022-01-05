import {makeStyles} from "@mui/styles";


export const useStyles = makeStyles({
    root: {
        margin: '10px 0',
        maxWidth: '15vw'
    },
    description: {
        fontSize: '0.8em',
        color: "grey",
        '&>div>strong': {
            fontSize: '1.1em',
        }
    },
    iconWrapper: {
        position: "relative"
    },
    icon: {
        position: 'absolute',
        width: 60,
        height: 60,
        top: -24,
        right:-24
    }

});