import * as React from 'react';
import {ReactNode, useEffect, useState} from 'react';
import {FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import {FormattedMessage} from "react-intl";
import styles from "./styles";
import useDebounce from "../../../utils/hooks/useDebounce";
import {COUNTRY_CODE_OBJ} from "../../App/const";
import {weatherData} from "../../../utils/const";
import {WithStyles, withStyles} from "@mui/styles";
import classNames from "classnames";


const CitySelect: React.FC<IProps> = (props) => {
    const {children, onChange, countryValue, isTable,classes} = props;
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
            getCityList()
        }
    }, [debouncedValue, countryValue]);
    return (
        <Grid classes={{root: classNames(classes.root, {[classes.table]: isTable})}}
              container
              justifyContent={isTable ? "space-between" : "center"} alignItems={"center"}
              direction={'row'} gap={2}>

            {isTable &&  <FormattedMessage id={'city'}/>}

            <FormControl fullWidth classes={{root: classes.selectWrapper}}>
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
        </Grid>
    );
};

export default withStyles(styles)(CitySelect)

interface IProps extends WithStyles<typeof styles>{
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    countryValue: string;
    isTable?: boolean;
}
