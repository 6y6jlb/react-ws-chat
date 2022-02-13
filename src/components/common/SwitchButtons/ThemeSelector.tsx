import * as React from 'react';
import {SyntheticEvent} from 'react';
import {Grid, Switch} from "@mui/material";
import styles from './styles';
import {WithStyles, withStyles} from "@mui/styles";
import classNames from "classnames";

// не корректно работает с формиком, нужно разбираться
const ThemeSelector: React.FC<IProps> = (props) => {
    const {children, title, classes, isTable, value, onChange} = props;
    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {title && title}
            <Switch
                name="colorScheme"
                onChange={onChange}
                checked={value}
                size={"medium"}
                classes={{root: classes.switcher}}
            />
        </Grid>
    );
};

export default withStyles(styles)(ThemeSelector)

interface IProps extends WithStyles<typeof styles> {
    title: React.ReactNode
    isTable?: boolean
    value: boolean;
    onChange: (event: SyntheticEvent<Element, Event>, checked: boolean) => void
}
