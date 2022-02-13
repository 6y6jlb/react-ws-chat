import data from "./city.list.json"

export const MOBIL = 520;
export const weatherData = data as IWeatherOption[]

export const TABLE_WIDTH = 400;

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
    OFF = 'of'
};

export enum THEME {
    LIGHT = 'light',
    DART = 'dark'
}

export enum LS {
    OPTIONS = "OPTIONS",
    TOKEN = 'token',
    LANG = 'lang'
}