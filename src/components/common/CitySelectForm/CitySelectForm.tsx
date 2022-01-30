import * as React from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import {useStyles} from "./styles";
import {ChangeEvent, ReactNode, useEffect, useState} from "react";
import useDebounce from "../../../utils/hooks/useDebounce";
import {COUNTRY_CODE_OBJ} from "../../App/const";
import {weatherData} from "../../../utils/const";


export const CitySelectForm: React.FC<IProps> = (props) => {
    const styles = useStyles();
    const {children,onChange,countryValue} = props;
    const [city, setCity] = useState<string>('')
    const [filteredData, setFilteredData] = useState<Array<any>>([])
    const data = [...weatherData]

    const onCity = (value: string) => {
        setCity(`${city}${value}`)
    }
    const debouncedValue = useDebounce(city, 2000)
    const getCityList = () => {
        const country = COUNTRY_CODE_OBJ[countryValue].toUpperCase();
        setFilteredData(
            [...data].filter(item => {
                if (item.country === country) {
                    return item.name.toLowerCase().includes(debouncedValue.toLowerCase())
                }
            }).splice(0, 9))
        setCity('')
    }

    useEffect(() => {
        if (debouncedValue) {
            getCityList()}
    }, [debouncedValue, countryValue]);
    return (
        <>
            <FormControl fullWidth classes={{root: styles.selectWrapper}}>
                <InputLabel id="select-city-label">
                    <FormattedMessage id={'city'}/>
                </InputLabel>
                <Select
                    required
                    labelId="select-city-label"
                    id="city"
                    label={<FormattedMessage id={'city'}/>}
                    name="city"
                    onChange={onChange}
                    onKeyPress={(event) => onCity(event.key)}
                >
                    <MenuItem value=""><em> <FormattedMessage id={'none'}/></em></MenuItem>
                    {filteredData.map((city, id) => {
                        return < MenuItem key={city.id} value={city.name}>{city.name}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </>
    );
};
interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    countryValue: string;
}
