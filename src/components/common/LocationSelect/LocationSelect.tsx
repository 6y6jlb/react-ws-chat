import * as React from 'react';
import CountrySelect from "../CountrySelect";
import CitySelect from "../CitySelect";
import {SelectChangeEvent} from "@mui/material";
import {ReactNode} from "react";


export const LocationSelect: React.FC<IProps> = (props) => {
    const {children, onChange, lang, country, isTable} = props;
    return (
        <>
            <CountrySelect isTable={isTable} lang={lang} onChange={onChange}/>
            {country && (
                <CitySelect isTable={isTable} onChange={onChange} countryValue={country}/>
            )}
        </>
    );
};


interface IProps {
    onChange: (event: SelectChangeEvent<unknown>, child: ReactNode) => void;
    lang: any;
    country: string;
    isTable?: boolean;
}
