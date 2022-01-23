import data from "./city.list.json"

export const MOBIL = 520;
export const weatherData = data as IWeatherOption[]

interface IWeatherOption {
    "id": number,
    "name": string,
    "state": string,
    "country": string,
    "coord": {
        "lon": number,
        "lat": number
    }
};

export enum SWITCHER {
    ON = 'on',
    OF = 'of'
};

export enum THEME {
    LIGHT = 'light',
    DART = 'dark'
}

export enum LS {
    OPTIONS = "OPTIONS"
}