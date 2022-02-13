import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import styles from "./styles";
import {LANG} from "../../App/const";
import {COUNTRY, COUNTRY_COMPLIMENTARY, COUNTRY_ITEMS} from "../../BasicJoinForm/const";
import classNames from "classnames";
import {WithStyles, withStyles} from "@mui/styles";


const CountrySelect: React.FC<IProps> = (props) => {
    const {children, onChange, lang, isTable, classes, value} = props;
    const [values, setValues] = useState(COUNTRY_ITEMS[LANG.EN])
    const [currentValue, setCurrentValue] = useState(lang === LANG.RU ? COUNTRY.UA_RU : COUNTRY.UA_EN)


    useEffect(() => {
        setValues(COUNTRY_ITEMS[lang])
    }, [lang])

    useEffect(() => {
        if (!values.includes(value)) {
            setCurrentValue(COUNTRY_COMPLIMENTARY[value as any])
        } else {
            setCurrentValue(value)
        }
    }, [values, value])


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
                    value={currentValue}
                    onChange={onChange}>
                    {values.map(country => <MenuItem value={country}>{country}</MenuItem>)}
                </Select>

            </FormControl>
        </Grid>
    );
};

export default withStyles(styles)(CountrySelect);

interface IProps extends WithStyles<typeof styles> {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
    isTable?: boolean;
    value: LANG
}
