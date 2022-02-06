import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import styles from "./styles";
import {LANG} from "../../App/const";
import {COUNTRY, LANGUAGES} from "../../BasicJoinForm/const";
import classNames from "classnames";
import {WithStyles, withStyles} from "@mui/styles";


interface IProps extends WithStyles<typeof styles> {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
    isTable?: boolean;
}

const CountrySelect: React.FC<IProps> = (props) => {
    const {children, onChange, lang, isTable, classes} = props;
    const [values, setValues] = useState(LANGUAGES[LANG.EN])

    useEffect(() => {
        setValues(LANGUAGES[lang])
    }, [lang])
    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>

            {isTable && <FormattedMessage id={'country'}/>}

            <FormControl fullWidth classes={{root: classes.selectWrapper}}>
                {!isTable && <InputLabel id="select-country-label">
                    <FormattedMessage id={'country'}/>
                </InputLabel>}
                <Select
                    labelId="select-country-label"
                    id="country"
                    label={!isTable && <FormattedMessage id={'country'}/>}
                    name="country"
                    onChange={onChange}>
                    {values.map(language => <MenuItem value={language}>{language}</MenuItem>)}
                </Select>

            </FormControl>
        </Grid>
    );
};

export default withStyles(styles)(CountrySelect);