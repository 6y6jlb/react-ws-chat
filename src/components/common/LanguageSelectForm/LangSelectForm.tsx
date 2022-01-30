import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {LANGUAGE} from "../../BasicJoinForm/const";
import {LANG} from "../../App/const";
import {useStyles} from "./styles";
import {ReactNode} from "react";


interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
}

export const LangSelectForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children,onChange} = props;
    return (
        <>
            <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                <InputLabel id="select-label">
                    <FormattedMessage id={'language'}/>
                </InputLabel>
                <Select
                    labelId="select-label"
                    id="lang"
                    label={<FormattedMessage id={'language'}/>}
                    name="lang"
                    onChange={onChange}
                    defaultValue={LANGUAGE.RU}
                >
                    <MenuItem value={LANGUAGE.RU}>{LANG.RU}</MenuItem>
                    <MenuItem value={LANGUAGE.EN}>{LANG.EN}</MenuItem>
                </Select>
            </FormControl>
        </>
    );
};