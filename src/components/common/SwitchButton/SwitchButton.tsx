import * as React from 'react';
import {FormGroup, Grid, Radio, RadioGroup, Switch} from "@mui/material";
import styles from './styles';
import {FormattedMessage, useIntl} from "react-intl";
import FormControlLabel from '@mui/material/FormControlLabel';
import {WithStyles, withStyles} from "@mui/styles";
import classNames from "classnames";


interface IProps extends WithStyles<typeof styles> {
    title: React.ReactNode
    isTable?: boolean
}


const SwitchButton: React.FC<IProps> = (props) => {
    const {children, title, classes,isTable} = props;
    const [isDarkTheme, setDartTheme] = React.useState(false);
    const intl = useIntl()

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDartTheme(event.target.value);
    // };


    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {title && title}
                <FormControlLabel
                    control={<Switch size={"medium"} classes={{root:classes.switcher}}  sx={{m: 1}} defaultChecked/>} disableTypography
                    label={''}  labelPlacement={'start'}
                />
        </Grid>
    );
};

export default withStyles(styles)(SwitchButton)

