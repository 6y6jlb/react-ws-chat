import * as React from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {LANGUAGE} from "../../BasicJoinForm/const";
import {LANG} from "../../App/const";
import styles from "./styles";
import {ReactNode} from "react";
import classNames from "classnames";
import {withStyles, WithStyles} from "@mui/styles";


const LangSelect: React.FC<IProps> = (props) => {
    const {children,onChange,isTable,classes} = props;
    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>
            {isTable && <FormattedMessage id={'language'}/>}
            <FormControl fullWidth classes={{root: classes.selectWrapper}}>
                {!isTable && <InputLabel id="select-label">
                    <FormattedMessage id={'language'}/>
                </InputLabel>}
                <Select
                    labelId="select-label"
                    id="lang"
                    label={!isTable && <FormattedMessage id={'language'}/>}
                    name="lang"
                    onChange={onChange}
                    defaultValue={LANGUAGE.RU}
                >
                    <MenuItem value={LANGUAGE.RU}>{LANG.RU}</MenuItem>
                    <MenuItem value={LANGUAGE.EN}>{LANG.EN}</MenuItem>
                </Select>
            </FormControl>
        </Grid>
    );
};

export default withStyles(styles)(LangSelect);


interface IProps extends WithStyles<typeof styles> {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    isTable?: boolean;
}