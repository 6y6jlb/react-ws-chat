import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import {LANG} from "../../App/const";
import {COUNTRY, LANGUAGES} from "../../BasicJoinForm/const";


interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
}

export const CountrySelectForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children, onChange, lang} = props;
    const [values,setValues] = useState(LANGUAGES[LANG.EN])

    useEffect(()=>{
        setValues(LANGUAGES[lang])
    },[lang])
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
                    {values.map(language=> <MenuItem value={language}>{language}</MenuItem>)}
                </Select>
            </FormControl>

        </>
    );
};