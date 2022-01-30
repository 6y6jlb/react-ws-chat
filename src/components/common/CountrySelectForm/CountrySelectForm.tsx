import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import {LANG} from "../../App/const";
import {COUNTRY} from "../../BasicJoinForm/const";
import {ReactNode} from "react";


interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
}

export const CountrySelectForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children, onChange, lang} = props;
    console.log(lang)
    const getCountryItems = () => {
        if (lang === LANG.RU) {
            return <>
                <MenuItem value={COUNTRY.RU_RU}>{COUNTRY.RU_RU}</MenuItem>
                <MenuItem value={COUNTRY.UA_RU}>{COUNTRY.UA_RU}</MenuItem>
                <MenuItem value={COUNTRY.BY_RU}>{COUNTRY.BY_RU}</MenuItem>
            </>
        }
        return <>
            <MenuItem value={COUNTRY.RU_EN}>{COUNTRY.RU_EN}</MenuItem>
            <MenuItem value={COUNTRY.UA_EN}>{COUNTRY.UA_EN}</MenuItem>
            <MenuItem value={COUNTRY.BY_EN}>{COUNTRY.BY_EN}</MenuItem>
        </>
    }


    return (
        <>
            <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                <InputLabel id="select-country-label">
                    <FormattedMessage id={'country'}/>
                </InputLabel>
                <Select
                    labelId="select-country-label"
                    id="country"
                    label={<FormattedMessage id={'country'}/>}
                    name="country"
                    onChange={onChange}
                >
                    {getCountryItems()}
                </Select>
            </FormControl>

        </>
    );
};