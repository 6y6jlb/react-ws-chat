import * as React from 'react';
import {ChangeEventHandler} from 'react';
import {WithStyles, withStyles} from "@mui/styles";
import styles from './styles';
import {Alert, Box, Grid, Grow, InputBaseComponentProps, StandardTextFieldProps, TextField} from "@mui/material";
import classNames from "classnames";


export const CommonTextField: React.FC<IProps> = (props) => {
    const {children, classes, onChange, alert, value, isTable, title, id, variant,required,inputProps,type} = props;
    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {(isTable && title) && title}
            <TextField variant={variant}
                       onChange={onChange}
                       value={value}
                       inputProps={inputProps}
                       type={type}
                       required={required}
                       id={id} name={id} label={!isTable && title}
            />
            {alert && <Box className={classes.validatorMessage}>
                <Grow in={!!alert}>{
                    <Alert severity="error">{alert}</Alert>
                }
                </Grow>
            </Box>}
        </Grid>
    );
};

export default withStyles(styles)(CommonTextField);

interface IProps extends WithStyles<typeof styles> {
    isTable?: boolean;
    onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    value: string;
    alert?: string
    title?: React.ReactNode;
    id: string;
    variant?: StandardTextFieldProps["variant"]
    type?: StandardTextFieldProps["type"]
    required?: boolean;
    inputProps?:  InputBaseComponentProps | undefined;
}