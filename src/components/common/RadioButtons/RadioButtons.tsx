import * as React from 'react';
import {FormControlLabel, Grid, Radio, RadioGroup, SelectChangeEvent} from "@mui/material";
import styles from './styles';
import {FormattedMessage, useIntl} from "react-intl";
import classNames from "classnames";
import {WithStyles, withStyles} from "@mui/styles";
import {ReactNode} from "react";
import {THEME} from "../../../utils/const";


interface IProps extends WithStyles<typeof styles> {
    title: string;
    isTable?: boolean;
    value: boolean | THEME;
    options: any[];
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    name: string;
}

const RadioButtons: React.FC<IProps> = (props) => {
    const {children, title, isTable, classes, value, options, onChange,name} = props;


    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {title && <FormattedMessage id={title}/>}
            <RadioGroup name={name}
                        defaultValue="first"
                        row
                        value={value}>
                {options.map(o => {
                    return (
                        <FormControlLabel value={o.value} control={<Radio onChange={onChange}/>} label={o.label}/>
                    )
                })}
            </RadioGroup>
        </Grid>
    );
};

export default withStyles(styles)(RadioButtons);