import * as React from 'react';
import CountrySelect from "../CountrySelect";
import CitySelect from "../CitySelect";
import {SelectChangeEvent} from "@mui/material";
import {ReactNode} from "react";
import {LANG} from "../../App/const";


export const LocationSelect: React.FC<IProps> = (props) => {
    const {children, onChange, lang, country, isTable,city} = props;
    return (
        <>
            <CountrySelect value={country} isTable={isTable} lang={lang} onChange={onChange}/>
            {country && (
                <CitySelect value={city} isTable={isTable} onChange={onChange} countryValue={country}/>
            )}
        </>
    );
};


interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
    country: LANG;
    city: string;
    isTable?: boolean;
}
